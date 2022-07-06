import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
//import { Logger } from 'sass';

const firebaseConfig = {
  apiKey: "AIzaSyCiLlbBvLvakG1p8jmg6738_HvkEeVei9U",
  authDomain: "e-commerce-29f44.firebaseapp.com",
  projectId: "e-commerce-29f44",
  storageBucket: "e-commerce-29f44.appspot.com",
  messagingSenderId: "146149450124",
  appId: "1:146149450124:web:2b033c70d9b51f7f5bb6a9",
  measurementId: "G-2LKS9DZYXB",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};