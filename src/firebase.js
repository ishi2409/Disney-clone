import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {

  apiKey: "AIzaSyCocSbWMDLmYDBobVfoyNGHpjq0H-CJ0f0",
  authDomain: "disney-19be7.firebaseapp.com",
  projectId: "disney-19be7",
  storageBucket: "disney-19be7.appspot.com",
  messagingSenderId: "936013232231",
  appId: "1:936013232231:web:e17b450499778555933cc2"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
