import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
    getAuth, getRedirectResult, GoogleAuthProvidergetAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


import { 
  getAnalytics

 } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";



import { 
  setDoc,
  doc,
  getFirestore,
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
 
 } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

 import {
  getStorage, 
  ref,
  uploadBytesResumable,
  getDownloadURL,

} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage"

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
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
 
  firebase.analytics();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
  const onLoad = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        loadMessages(user);
        emailText && (emailText.innerText = user.email);
        if (currentPageName !== "" && currentPageName !== "index.html") {
          window.location.href = "index.html";
        }
      } else {
        if (currentPageName !== "login.html") {
          window.location.href = "login.html";
        }
      }
    });
  };
  onLoad();

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => { })
        .catch((error) => { });
};
const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
console.log(3);
  const login = document.getElementById("myBtn");
 login && login.addEventListener("click", function() {
  alert("sdas");
});
alert("hello");