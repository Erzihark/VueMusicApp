import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/storage';

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
const storage = firebase.storage();

db.enablePersistence().catch((error)=>{
  console.log('Firebase persistence error ', error.code)
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
    auth,
    db,
    usersCollection,
    songsCollection,
    commentsCollection,
    storage,
}