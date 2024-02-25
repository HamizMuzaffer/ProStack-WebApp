
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth, getRedirectResult,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
  createUserWithEmailAndPassword
  
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import { getFirestore , collection , getDocs, addDoc} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDSDraXzO8OjpmLbYb6_OPoqqgwCgS8auA",
  authDomain: "prostack-5899e.firebaseapp.com",
  projectId: "prostack-5899e",
  storageBucket: "prostack-5899e.appspot.com",
  messagingSenderId: "559447833786",
  appId: "1:559447833786:web:ac6c2446fc6ec77cf5d683",
  measurementId: "G-4HZYSFV1GL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const provider1 = new FacebookAuthProvider();



const loginWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "./final.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;


  });

const loginWithFacebook = () =>
  signInWithPopup(auth, provider1)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "./final.html"


    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;


    });

const signoutWithGoggle = () => signOut(auth)
  .then(() => {
    window.location.href = "./index.html"
  }).catch((error) => {

  });
const login = document.getElementById("myBtn");
login && login.addEventListener("click", loginWithGoogle);

const logout = document.getElementById("logoutBtn");
logout && logout.addEventListener("click", signoutWithGoggle)

const fblogin = document.getElementById("myBtn2");
fblogin && fblogin.addEventListener("click", loginWithFacebook);



let email = document.getElementById("mail");
let password = document.getElementById("password");
let mydata = document.getElementById("signin");
let formInput = document.getElementById("form");

const loginWithEmail = evt => {
 evt.preventDefault();

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
         
    // const user = userCredential.user;
    console.log(userCredential.user);
    window.location.href = "./final.html"

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
 formInput && formInput.addEventListener("submit", loginWithEmail);



 let heading = document.getElementById("header-box");

 let query = document.getElementById("Input-Text");
let question  = query.value;
 let category = document.getElementById("myLabel")
let mySumbitBtn = document.getElementById("myBtn");

let headingInput = heading.value;



mySumbitBtn && mySumbitBtn.addEventListener("click", ()=> {

  if(query.value == "" || headingInput.value == ""){
  alert("Error");
  }
  else{
    console.log(headingInput);
    alert("Your Blog have been posted")
  }})
  