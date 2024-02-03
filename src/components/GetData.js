import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



export async function GetRole(user_id) {
    const db = firebase.firestore();
    console.log("Finding user with user_id:", user_id);
    const emailUsersSnapshot = await db.collection("Roles").where("user_id", "==", user_id).get();
    console.log("returned ", emailUsersSnapshot.docs[0].data().role)
    return emailUsersSnapshot.docs[0].data().role;
}

export function GetName(user_id) {
    const db = firebase.firestore();
    const emailUsersSnapshot = db.collection("Roles").where("user_id", "==", user_id).get();
    return emailUsersSnapshot.docs[0].data().name;
}

export function GetEmail(user_id) {
    const db = firebase.firestore();
    const emailUsersSnapshot = db.collection("Roles").where("user_id", "==", user_id).get();
    return emailUsersSnapshot.docs[0].data().email;
}

export function GetPassword(user_id) {
    const db = firebase.firestore();
    const emailUsersSnapshot = db.collection("Roles").where("user_id", "==", user_id).get();
    return emailUsersSnapshot.docs[0].data().password;
}