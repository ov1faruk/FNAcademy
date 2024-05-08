// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Firebase configuration
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
const auth = getAuth(app);

// Check if user is logged in
onAuthStateChanged(auth, user => {
    if (user) {
        // If user is logged in, redirect to index.html
        window.location = 'index.html';
    }
});

// Email and Password Login
document.getElementById('loginEmailPassword').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
        window.location = 'index.html'; // Redirect to index.html on success
    } catch (error) {
        console.error('Error signing in with email and password:', error);
        alert('Failed to log in: ' + error.message);
    }
});

// Google Login
document.getElementById('loginGoogle').addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log('Google sign-in successful, user:', result.user);
        window.location = 'index.html'; // Redirect to index.html on success
    } catch (error) {
        console.error('Error signing in with Google:', error);
        alert('Failed to log in with Google: ' + error.message);
    }
});

// Logout function
document.getElementById('logout').addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('User signed out.');
        window.location = 'login.html';
    }).catch((error) => {
        // An error happened.
        console.error('Sign out error:', error);
    });
});
