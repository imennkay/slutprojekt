import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCmS-9RB4RLkhGb7cN4EOjbVz0fgpNSaOs",
    authDomain: "bookingapp-5c012.firebaseapp.com",
    databaseURL: "https://bookingapp-5c012.firebaseio.com",
    projectId: "bookingapp-5c012",
    storageBucket: "bookingapp-5c012.appspot.com",
    messagingSenderId: "888874645062",
    appId: "1:888874645062:web:c934b254b738781a403c47"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth();
  export default firebase;