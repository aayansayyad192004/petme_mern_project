// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-pet2.firebaseapp.com',
  projectId: 'mern-pet2',
  storageBucket: 'mern-pet2.appspot.com',
  messagingSenderId: '82829437172',
  appId: '1:82829437172:web:acef2071be7670b4cf16a1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
