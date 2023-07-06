// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrbiK44jvvw0Z6HrPJLieOjrFQGhuD5xY",
  authDomain: "anuncioapp-a9ce5.firebaseapp.com",
  projectId: "anuncioapp-a9ce5",
  storageBucket: "anuncioapp-a9ce5.appspot.com",
  messagingSenderId: "785114431647",
  appId: "1:785114431647:web:ac0a78f5faa74ce949a2aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export default database