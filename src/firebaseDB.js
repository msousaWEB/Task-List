import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyDZ-4dD6Mt9ChIxafAUuNeDelktB8V-54c",

    authDomain: "to-do-list-a9f59.firebaseapp.com",

    projectId: "to-do-list-a9f59",

    storageBucket: "to-do-list-a9f59.appspot.com",

    messagingSenderId: "813458652286",

    appId: "1:813458652286:web:f594244806b7c8abcf2c2f"

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();
