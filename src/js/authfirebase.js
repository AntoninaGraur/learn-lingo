

import { getDatabase, set, ref } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/app';


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC4UcnUoTTN2_H0jlFuihTdTRN09u_I5Hg",
  authDomain: "vanillajavascript-8b86d.firebaseapp.com",
  projectId: "vanillajavascript-8b86d",
  storageBucket: "vanillajavascript-8b86d.appspot.com",
  messagingSenderId: "722728904571",
  appId: "1:722728904571:web:365b8fa812b48c9855ffde"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth(app);

console.log(auth);
