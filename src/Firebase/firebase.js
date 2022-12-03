
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2pckonn92ZpApaOYKADy5JQ7v2IGv5zA",
  authDomain: "value1-5d137.firebaseapp.com",
  projectId: "value1-5d137",
  storageBucket: "value1-5d137.appspot.com",
  messagingSenderId: "798090499438",
  appId: "1:798090499438:web:aaf0a05ded1bbb5377dd7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app);