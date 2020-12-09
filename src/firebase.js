import firebase from "firebase";

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

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };