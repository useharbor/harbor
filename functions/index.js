/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const {Translate} = require('@google-cloud/translate').v2;

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

initializeApp();
const translate = new Translate();

exports.seeding = onRequest(async (request, response) => {
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
        console.error('Error during translation:', error);
        response.status(500).send('Internal Server Error');
    }
});

exports.branchingedit = onRequest(async (request, response) => {
    res.send("FILLER");
});