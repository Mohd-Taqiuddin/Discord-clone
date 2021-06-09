import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQwK73l1FIBJ61AII8-UEvAEybWSd5Mwo",
    authDomain: "discord-clone-143e0.firebaseapp.com",
    projectId: "discord-clone-143e0",
    storageBucket: "discord-clone-143e0.appspot.com",
    messagingSenderId: "831904308993",
    appId: "1:831904308993:web:0eb7a38de8b33e71b70500",
    measurementId: "G-6DZ1ZMTX7G"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;