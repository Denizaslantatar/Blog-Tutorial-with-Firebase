import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaz4l0y0QMc_bEkDo8sj4uY3c2xanD9Y8",
    authDomain: "blog-app-33a7f.firebaseapp.com",
    projectId: "blog-app-33a7f",
    storageBucket: "blog-app-33a7f.appspot.com",
    messagingSenderId: "616759070192",
    appId: "1:616759070192:web:878d461312840c4b05e135",
    measurementId: "G-F3H9DH2KRC"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db,timestamp };