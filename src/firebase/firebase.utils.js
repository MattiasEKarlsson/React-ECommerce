import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDoYwYBl8pvWBGUwXPwPPH6-HN68G4G9No",
  authDomain: "crw-db-bf6e8.firebaseapp.com",
  projectId: "crw-db-bf6e8",
  storageBucket: "crw-db-bf6e8.appspot.com",
  messagingSenderId: "52727505974",
  appId: "1:52727505974:web:6001694eedd9a7b521a497",
  measurementId: "G-7GD79R11VE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
