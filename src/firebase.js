import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmcbQW8PtXgs7NVupxYnH7XQlXQSYaN0k",
  authDomain: "dba-project-1b1d5.firebaseapp.com",
  projectId: "dba-project-1b1d5",
  storageBucket: "dba-project-1b1d5.appspot.com",
  messagingSenderId: "314151565254",
  appId: "1:314151565254:web:fee9f54ecd45c38d8624c7",
  measurementId: "G-NGE8ZMLGLY"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Creation of database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


