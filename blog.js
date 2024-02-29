import 
{
     initializeApp
     } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";


import
 { 
    getFirestore, collection, getDocs, addDoc
 } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


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
const db = getFirestore(app);




