import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQG1sEbCVYYmCxBlhbY0ACZsP25BHh0u0",
    authDomain: "privet-83a48.firebaseapp.com",
    databaseURL: "https://privet-83a48.firebaseio.com",
    projectId: "privet-83a48",
    storageBucket: "privet-83a48.appspot.com",
    messagingSenderId: "864513816118"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth
};
