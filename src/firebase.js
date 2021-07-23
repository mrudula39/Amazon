import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBezQDoBytfaGzoLN2MYJWQpp51h35_8qU",
    authDomain: "clone-c70ab.firebaseapp.com",
    projectId: "clone-c70ab",
    storageBucket: "clone-c70ab.appspot.com",
    messagingSenderId: "142122922740",
    appId: "1:142122922740:web:43155bae4e7af6f41864a1",
    measurementId: "G-4BNKBT28HE"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
