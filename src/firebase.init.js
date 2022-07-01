// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnhKsjXHUfh82yccp4metgvmV99LB-zPY",
  authDomain: "to-do-list-d9f15.firebaseapp.com",
  projectId: "to-do-list-d9f15",
  storageBucket: "to-do-list-d9f15.appspot.com",
  messagingSenderId: "288562199949",
  appId: "1:288562199949:web:c1d08d79427d1031f151c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;