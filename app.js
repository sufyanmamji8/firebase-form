// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth ,
     onAuthStateChanged,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut
     } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6jOrWqKBaCIwN6SANRSs7uxafd1D_Mho",
  authDomain: "login-page-4c475.firebaseapp.com",
  projectId: "login-page-4c475",
  storageBucket: "login-page-4c475.appspot.com",
  messagingSenderId: "539676431615",
  appId: "1:539676431615:web:e485b0c181a4d4de3828ca",
  measurementId: "G-F07ZKQLXRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('btn')

const emailsignup = document.getElementById('emailsignup')
const passwordsignup = document.getElementById('passwordsignup')
const buttonsignup = document.getElementById('btnsignup')

const authcontainer = document.getElementById('body')
const usercontainer = document.getElementById('usercontainer')

const useremail = document.getElementById('useremail')
const logoutbtn = document.getElementById('logout')




button.addEventListener('click', createUserAccount)


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user is logged in');
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    authcontainer.style.display = ("none")
    usercontainer.style.display = ("block")
    useremail.innerText = user.email
    // ...
  } else {
    console.log('user is not logged in');
    authcontainer.style.display = ("block")
    usercontainer.style.display = ("none")
    // User is signed out
    // ...
  }
});

function createUserAccount(){
    createUserWithEmailAndPassword(auth, email.value , password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

}

buttonsignup.addEventListener('click', signInUser)

function signInUser(){
signInWithEmailAndPassword(auth, emailsignup.value, passwordsignup.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });


}

logoutbtn.addEventListener('click' , Logout)

function Logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}