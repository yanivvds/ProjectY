// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDddy8fSInQJb5JcRfXC_e-M4jTvm32W3Y",
  authDomain: "myrecipe-90c14.firebaseapp.com",
  databaseURL: "https://myrecipe-90c14-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myrecipe-90c14",
  storageBucket: "myrecipe-90c14.appspot.com",
  messagingSenderId: "306249447065",
  appId: "1:306249447065:web:d8c80c504863dfae416a08",
  measurementId: "G-R9C8KVG4SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);