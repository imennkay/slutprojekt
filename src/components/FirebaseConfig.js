import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

require('dotenv').config()
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: "bookingapp-5c012",
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APP_ID
  };

  firebase.initializeApp(firebaseConfig);
 

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth();
  export default firebase;