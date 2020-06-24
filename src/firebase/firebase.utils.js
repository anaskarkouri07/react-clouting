import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCDQmkSX_eA-jRg0JB4eJDL7qRFRxsH-lw",
  authDomain: "clowth-db.firebaseapp.com",
  databaseURL: "https://clowth-db.firebaseio.com",
  projectId: "clowth-db",
  storageBucket: "clowth-db.appspot.com",
  messagingSenderId: "975552883679",
  appId: "1:975552883679:web:5f8d02815b3e9e85f0f26a",
  measurementId: "G-LR4JGL93YF",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAth, additionalData) => {
  if (!userAth) return;

  const userRef = firestore.doc(`users/${userAth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
