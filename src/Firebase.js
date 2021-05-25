import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxWr6LrRzJkXN1rkA7bUrqzGcsfp08sV8",
    authDomain: "disneyplus-clone-vp.firebaseapp.com",
    projectId: "disneyplus-clone-vp",
    storageBucket: "disneyplus-clone-vp.appspot.com",
    messagingSenderId: "377647009258",
    appId: "1:377647009258:web:f1acf6f74398a57a3c7693",
    measurementId: "G-65FDJXVX19"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;
