// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2-1B39MllfzS_6FVGiDIwn7fE5GWBruY",
  authDomain: "programming-blog-77298.firebaseapp.com",
  projectId: "programming-blog-77298",
  storageBucket: "programming-blog-77298.appspot.com",
  messagingSenderId: "703621926735",
  appId: "1:703621926735:web:d4f52d866cad807128ff3a" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;