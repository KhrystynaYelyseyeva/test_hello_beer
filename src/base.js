import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: 'AIzaSyDU3q2QcPcciOuXy0dw1iNAHRVtEtZv2Q0',
    authDomain: "test-ylt.firebaseapp.com",
    projectId: "1:290169252727:web:9a061726d7410819424f72",
    storageBucket: "test-ylt.appspot.com",
    messagingSenderId: "290169252727",
    databaseURL: "https://test-ylt.firebaseio.com"
});

export default app;