// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDtnrSsX4pRUlI0F0bBZWpeafbHxtWItHU",
    authDomain: "clone-158e2.firebaseapp.com",
    //databaseURL: "https://clone-158e2.firebaseio.com",
    projectId: "clone-158e2",
    storageBucket: "clone-158e2.appspot.com",
    messagingSenderId: "721572137598",
    appId: "1:721572137598:web:480543930862cc2623a62f",
    measurementId: "G-NSN5ZNEVW5"
  };

 

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

export { db, auth,provider,storage};

export default db;