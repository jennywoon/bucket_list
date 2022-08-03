// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARdM3DyR_0kZB1hQEYUjgWp_ObeFXddD0",
  authDomain: "sparta-react-basic-8c914.firebaseapp.com",
  projectId: "sparta-react-basic-8c914",
  storageBucket: "sparta-react-basic-8c914.appspot.com",
  messagingSenderId: "162929419898",
  appId: "1:162929419898:web:21bbfc21567f7ee6897dc3",
  measurementId: "G-05C4CZBF8M"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();