import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAq3QATkcMh003qLO4yz1zkDKnVJ0M4A00",
    authDomain: "music-f1dd1.firebaseapp.com",
    projectId: "music-f1dd1",
    storageBucket: "music-f1dd1.appspot.com",
    appId: "1:1066698088224:web:90f7415ad5dc4751c78145"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
    auth,
    db,
    usersCollection,
}