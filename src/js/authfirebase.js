// import { initializeApp } from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';


// const firebaseConfig = {
//   apiKey: 'AIzaSyC4UcnUoTTN2_H0jlFuihTdTRN09u_I5Hg',
//   authDomain: 'vanillajavascript-8b86d.firebaseapp.com',
//   projectId: 'vanillajavascript-8b86d',
//   storageBucket: 'vanillajavascript-8b86d.appspot.com',
//   messagingSenderId: '722728904571',
//   appId: '1:722728904571:web:365b8fa812b48c9855ffde',
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const userEmail = document.querySelector('#emailInpt');
// console.log(userEmail);
// const userPassword = document.querySelector('#passInpt');
// console.log(userPassword);
// const registBtn = document.querySelector('#registrButton');

// const registerWindow = document.querySelector('#registrWindow');

// const userSignUp = async () => {
//   const signUpEmail = userEmail.value;
  
//   const signUpPassword = userPassword.value;
 
//   createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
//     .then(userCredential => {
//       const user = userCredential.user;
//       console.log(user);
//       alert('Your account has been created!');
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
      
//     });
// };
// registBtn.addEventListener('click', userSignUp);


document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('nameInpt');
  const emailInput = document.getElementById('emailInpt');
  const passInput = document.getElementById('passInpt');
  const form = document.querySelector('.registr-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passInput.value;

    // Збереження даних у localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Очистка полів вводу
    nameInput.value = '';
    emailInput.value = '';
    passInput.value = '';

    // Додаткові дії або перенаправлення на іншу сторінку
    // наприклад: window.location.href = "success.html";
  });
});
