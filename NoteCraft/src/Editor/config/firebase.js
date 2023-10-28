import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {
  getAuth,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";

// import "firebase/firestore";
// import "firebase/storage";

//Google Auth
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8gDIx8fbDBeMcJQAV5G62p-k4p-ACV9Q",
  authDomain: "notecraft-dev.firebaseapp.com",
  projectId: "notecraft-dev",
  storageBucket: "notecraft-dev.appspot.com",
  messagingSenderId: "619253240847",
  appId: "1:619253240847:web:ca4ef8fc52b316e296bf7a",
};

//Normal SignIn and LogIn setup
const fire = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const auth=getAuth(fire);
const provider = new GoogleAuthProvider();
// Set authentication state persistence to "local" (persistent across page reloads)


export {fire, auth, provider};






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8gDIx8fbDBeMcJQAV5G62p-k4p-ACV9Q",
//   authDomain: "notecraft-dev.firebaseapp.com",
//   projectId: "notecraft-dev",
//   storageBucket: "notecraft-dev.appspot.com",
//   messagingSenderId: "619253240847",
//   appId: "1:619253240847:web:ca4ef8fc52b316e296bf7a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);







// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";
import { Provider } from 'react-redux';

// const firebaseConfig = {
//   apiKey: "AIzaSyC8gDIx8fbDBeMcJQAV5G62p-k4p-ACV9Q",
//   authDomain: "notecraft-dev.firebaseapp.com",
//   projectId: "notecraft-dev",
//   storageBucket: "notecraft-dev.appspot.com",
//   messagingSenderId: "619253240847",
//   appId: "1:619253240847:web:ca4ef8fc52b316e296bf7a",
// };

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
// export const database = {
//   users: firestore.collection("users"),
//   docs: firestore.collection("docs"),
//   files: firestore.collection("files"),
//   date: firebase.firestore.FieldValue.serverTimestamp(),
// };

// export const storage = firebase.storage();

// export const auth = firebase.auth();