import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import firebase from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDatPlmqCXOeCterzHBbF5P6uYzbW0J_lQ",
    authDomain: "netflix-clone-eafba.firebaseapp.com",
    projectId: "netflix-clone-eafba",
    storageBucket: "netflix-clone-eafba.appspot.com",
    messagingSenderId: "335651719911",
    appId: "1:335651719911:web:75f5a444e0997477db7042"
};

export const app = initializeApp(firebaseConfig);
// export const db = getFirestore();
export const auth = getAuth();

export const db = firebase.firestore();

// export { db, auth };