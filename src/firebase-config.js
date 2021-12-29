import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyBUD50YTeeTIC2tzGSt_qXVxzknPr7xD5g",
    authDomain: "todo-app-2ac27.firebaseapp.com",
    projectId: "todo-app-2ac27",
    storageBucket: "todo-app-2ac27.appspot.com",
    messagingSenderId: "431291926361",
    appId: "1:431291926361:web:d1656fbb2888e7c7f8ae48",
    measurementId: "G-9TTBVL0E1D"
};
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// export { db };