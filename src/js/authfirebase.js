import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC4UcnUoTTN2_H0jlFuihTdTRN09u_I5Hg',
  authDomain: 'vanillajavascript-8b86d.firebaseapp.com',
  projectId: 'vanillajavascript-8b86d',
  storageBucket: 'vanillajavascript-8b86d.appspot.com',
  messagingSenderId: '722728904571',
  appId: '1:722728904571:web:365b8fa812b48c9855ffde',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const userEmail = document.querySelector('#emailInpt');
const userPassword = document.querySelector('#passInpt');
const registBtn = document.querySelector('#regisrButton');
const registerWindow = document.querySelector('#registrWindow');

const userSignUp = async () => {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then(userCredential => {
      const user = userCredential.user;
      alert('Your account has been created!');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};
registBtn.addEventListener('click', userSignUp);
