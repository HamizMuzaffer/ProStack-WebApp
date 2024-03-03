
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

import {
  getFirestore,
  onSnapshot,
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  query,
  where,
  getDocs,
    } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

    // import { getDatabase,ref,set,push} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDSDraXzO8OjpmLbYb6_OPoqqgwCgS8auA",
  authDomain: "prostack-5899e.firebaseapp.com",
  databaseURL: "https://prostack-5899e-default-rtdb.firebaseio.com",
  projectId: "prostack-5899e",
  storageBucket: "prostack-5899e.appspot.com",
  messagingSenderId: "559447833786",
  appId: "1:559447833786:web:ac6c2446fc6ec77cf5d683",
  measurementId: "G-4HZYSFV1GL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const database = getDatabase(app);

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


      console.log(userCredential.user);
      window.location.href = "./final.html"

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
formInput && formInput.addEventListener("submit", loginWithEmail);

let heading = document.querySelector("#header-box");
let category = document.getElementById("myLabel")
let mySumbitBtn = document.getElementById("myBtn");
let queryInput = document.getElementById("Input-Text");
let mydropdown = document.getElementById("dropdown");
let myBlog = document.getElementById("blogForm");


myBlog && myBlog.addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent default form submission
  const title = document.getElementById("header-box").value;
  
  const category = document.getElementById("dropdown").value;
  const content = document.getElementById("Input-Text").value;

  try {
    // Add a new document with a generated ID
    const docRef = await addDoc(collection(db, "blogPosts"), {
      title: title,
      category: category,
      content: content
    });
    console.log("Document written with ID: ", docRef.id);
    // Reset form after successful submission
    document.getElementById("blogForm").reset();
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});
async function displayBlogPosts() {
  const blogList = document.getElementById("blogList");

  try {
    const querySnapshot = await getDocs(collection(db, "blogPosts"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const blogMain = document.createElement("div")
      const MainHead = document.createElement("h1");
      const MainText = document.createElement("h4")
      const mycateg  = document.createElement("h4");
      MainText.setAttribute("class", "myText")
      MainHead.setAttribute("class","myTitle")
      mycateg.setAttribute("class", "mycateg")
      blogMain.setAttribute("class" ,"mypost");
      mycateg.textContent= `-${data.category}`;
      MainHead.textContent = `${data.title}`;
      MainText.textContent = `${data.content}`;
      blogMain.appendChild(MainHead);
      blogMain.appendChild(mycateg)
      blogMain.appendChild(MainText)
      blogList.appendChild(blogMain);
    });
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
}

// Call the function to display blog posts
displayBlogPosts();
const loginPage = document.getElementById("tick");

function hideDiv(){
  
  loginPage.style.zIndex = "0";
  }
  const singupLink = document.getElementById("signuptext");
  singupLink.addEventListener("click",hideDiv);

// Category: ${data.category}, Content: ${data.content}


const getLoginPage = document.getElementById("getlogin");

function getDiv(){
  c
}
getLoginPage.addEventListener("click",getDiv);

const mysignbtn = document.getElementById("signin");
mysignbtn.addEventListener("click", ()=>{
  loginPage.style.zIndex = "5";
})