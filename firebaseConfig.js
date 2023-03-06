// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK_LqOUI7RJKVcvDmQboBskLmPSDTGelE",
  authDomain: "auth-app-dc6a7.firebaseapp.com",
  projectId: "auth-app-dc6a7",
  storageBucket: "auth-app-dc6a7.appspot.com",
  messagingSenderId: "624735240816",
  appId: "1:624735240816:web:468184dfa086032e866ab5",
  measurementId: "G-V5WJ00ZL6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export default app;

export {provider, auth}