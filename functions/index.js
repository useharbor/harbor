const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const {Translate} = require('@google-cloud/translate').v2;

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

initializeApp();
const translate = new Translate();

/* should be called when a job is created, before writing the content to the job document
 * ie, the content field in a Job document should be seeded text, not original text
 */
exports.seeding = onRequest({ cors: true, auth: 'optional' }, async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    try {
        // parse out text from the request
        const data = request.query;
        const originalText = data.text;
        console.log("Original Text: ", originalText)
        // translate the text
        let [translations] = await translate.translate(originalText, 'en');
        translations = Array.isArray(translations) ? translations : [translations];
        response.json({ seed: translations[0] });
    } catch (error) {
        console.error('Error during seeding:', error);
        response.status(500).send('Internal Server Error');
    }
});

/* called when a user opens the voting card page
 * request: contains workerRef for the authenticated user/worker
 * response: ContentEditsRefs for the 2 assigned voting cards
 */
exports.displayVoteCards = onRequest({ cors: true, auth: 'optional' }, async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    try {
        const data = request.query
        const workerRef = data.workerRef;
        // iterate over all documents in Jobs collection
        const db = getFirestore();
        const jobsSnapshot = await db.collection('Jobs').get();
        for (const jobDoc of jobsSnapshot.docs) {
            const versions = jobDoc.data().versions;
            // filter versions by latest timestamp
            versions.sort((a, b) => b.timestamp - a.timestamp);
            for (const version of versions) {
                // find exactly 2 different ContentEdit collection documents that have voting_card = true
                const contentEditsSnapshot = await db.collection('ContentEdits').where('voting_card', '==', true)
                                                                                .where('assigned', '==', false).get();
                if ((contentEditsSnapshot.docs).length >= 2) {
                    const contentEdit1 = contentEditsSnapshot.docs[0];
                    const contentEdit2 = contentEditsSnapshot.docs[1];
                    // update the workers array field in job document to include the workerRef
                    const workers = jobDoc.data().workers;
                    workers.push(workerRef);
                    await jobDoc.ref.update({ workers: workers });
                    // update the workers docRef fields in the 2 voting card documents to include the workerRef
                    await contentEdit1.ref.update({ worker: workerRef, assigned: true});
                    await contentEdit2.ref.update({ worker: workerRef, assigned: true});
                    // return the ContentEditRefs for the 2 voting cards and the original job document
                    response.json({ vote1: contentEdit1.ref, vote2: contentEdit2.ref, original: jobDoc.ref });
                    return;
                }
            }
        }
        // if no voting cards are found, return null
        response.json({ vote1: null, vote2: null });
    } catch (error) {
        console.error('Error during vote card display:', error);
        response.status(500).send('Internal Server Error');
    }
});

// called when a user opens the edit card page
exports.displayEditCard = onRequest({ cors: true, auth: 'optional' }, async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    try {
        const data = request.query
        const workerRef = data.workerRef;
        // iterate over all documents in Jobs collection
        const db = getFirestore();
        const jobsSnapshot = await db.collection('Jobs').get();
        for (const jobDoc of jobsSnapshot.docs) {
            const versions = jobDoc.data().versions;
            // filter versions by latest timestamp
            versions.sort((a, b) => b.timestamp - a.timestamp);
            for (const version of versions) {
                // find exactly 1 Contentedit collection document that has voting_card = false and assigned = false
                const contentEditsSnapshot = await db.collection('ContentEdits').where('voting_card', '==', false)
                                                                                .where('assigned', '==', false).get();
                if ((contentEditsSnapshot.docs).length > 0) {
                    const contentEdit = contentEditsSnapshot.docs[0];
                    // update the workers array field in job document to include the workerRef
                    const workers = jobDoc.data().workers;
                    workers.push(workerRef);
                    const num_edits = jobDoc.data().num_edits;
                    const new_num_edits = num_edits + 1;
                    await jobDoc.ref.update({ workers: workers, num_edits : new_num_edits});
                    // update the workers docRef fields in the edit card document to include the workerRef
                    await contentEdit.ref.update({ worker: workerRef, assigned: true});
                    // return the ContentEditRefs for the edit card and the original job document
                    console.log(contentEdit)
                    response.json({ edit: contentEdit, original: jobDoc });
                    return;
                }
            }
        }
        // if no edit cards are found, return null
        response.json({ edit: null, original: null });
    } catch (error) {
        console.error('Error during edit card display:', error);
        response.status(500).send('Internal Server Error');
    
    } 
});