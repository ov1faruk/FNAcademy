// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaw4ZZAkrp4EwoYz9B6v_m3Lppx9nwXIE",
  authDomain: "fnacademy-70632.firebaseapp.com",
  projectId: "fnacademy-70632",
  storageBucket: "fnacademy-70632.appspot.com",
  messagingSenderId: "23035383588",
  appId: "1:23035383588:web:34d8739d947cb1abe16db1",
  measurementId: "G-SKR96P90V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app
export { app };
