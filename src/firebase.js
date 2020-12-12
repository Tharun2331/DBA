import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyD_Uo2f4AhYQL_U8OzJhU3KvX6m9AwSDFo",
    authDomain: "ee-proj.firebaseapp.com",
    projectId: "ee-proj",
    storageBucket: "ee-proj.appspot.com",
    messagingSenderId: "831450638541",
    appId: "1:831450638541:web:ff6acc81abec9414d0a184",
    measurementId: "G-0SDB576BT5"
<<<<<<< HEAD
=======

>>>>>>> 8cb56757c76c057fa0d020e038d41c84876038ed
}

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Creation of database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


