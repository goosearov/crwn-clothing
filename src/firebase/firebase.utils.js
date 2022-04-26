import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDYDCqaicl6COJG7owP3vGhKVZIKypONDE",
    authDomain: "crwn-db-e5b76.firebaseapp.com",
    projectId: "crwn-db-e5b76",
    storageBucket: "crwn-db-e5b76.appspot.com",
    messagingSenderId: "1037192294407",
    appId: "1:1037192294407:web:b8ed83bfc9c2f1d525baa2"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;