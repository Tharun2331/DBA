import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyD_Uo2f4AhYQL_U8OzJhU3KvX6m9AwSDFo",
    authDomain: "ee-proj.firebaseapp.com",
    projectId: "ee-proj",
    storageBucket: "ee-proj.appspot.com",
    messagingSenderId: "831450638541",
    appId: "1:831450638541:web:ff6acc81abec9414d0a184",
    measurementId: "G-0SDB576BT5"

const firebaseConfig = {
    apiKey: "AIzaSyCETLysDr8nS_tfT3Ky_OD4QB0lE7kzzNY",
    authDomain: "ee-design.firebaseapp.com",
    projectId: "ee-design",
    storageBucket: "ee-design.appspot.com",
    messagingSenderId: "200735518450",
    appId: "1:200735518450:web:4cf63b3540c513d6c06a6b",
    measurementId: "G-VX9ZXZNK08"

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Creation of database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

