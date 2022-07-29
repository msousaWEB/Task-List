  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyDZ-4dD6Mt9ChIxafAUuNeDelktB8V-54c",

    authDomain: "to-do-list-a9f59.firebaseapp.com",

    projectId: "to-do-list-a9f59",

    storageBucket: "to-do-list-a9f59.appspot.com",

    messagingSenderId: "813458652286",

    appId: "1:813458652286:web:f594244806b7c8abcf2c2f"

  };


  // Initialize Firebase

  const firebaseApp = initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();
