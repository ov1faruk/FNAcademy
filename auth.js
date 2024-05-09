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

// Function to handle email and password login
export async function loginWithEmailPassword(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
        window.location = 'index.html'; // Redirect to index.html on success
    } catch (error) {
        console.error('Error signing in with email and password:', error);
        alert('Failed to log in: ' + error.message);
    }
}

// Function to handle Google login
export async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log('Google sign-in successful, user:', result.user);
        window.location = 'index.html'; // Redirect to index.html on success
    } catch (error) {
        console.error('Error signing in with Google:', error);
        alert('Failed to log in with Google: ' + error.message);
    }
}

// Function to handle logout
export function logout() {
    console.log('Logout button clicked');
    signOut(auth).then(() => {
        console.log('User signed out.');
        window.location = 'login.html'; // Redirect to login.html on logout
    }).catch((error) => {
        console.error('Sign out error:', error);
    });
}

// Redirect to login page if not authenticated
function redirectToLogin() {
    if (!window.location.pathname.includes('login.html')) {
        window.location = 'login.html';
    }
}

// Monitoring authentication state
onAuthStateChanged(auth, (user) => {
    if (!user) {
        redirectToLogin(); // Redirect to login page if user is not authenticated
    }
});
