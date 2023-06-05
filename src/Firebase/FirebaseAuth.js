import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    signInAnonymously,
} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAbTjwkreaUG7EPzs3fC8aIwLgodwELySU",
    authDomain: "dsa-7bea5.firebaseapp.com",
    projectId: "dsa-7bea5",
    storageBucket: "dsa-7bea5.appspot.com",
    messagingSenderId: "37902278354",
    appId: "1:37902278354:web:b2d1b4313cb5b6388fd70b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
};
export const signOutFromGoogle = () => {
    signOut(auth, provider);
};
// export const signInAsGuest = () => {
//   signInAnonymously(auth, provider);
// };
export const db = getFirestore(app);