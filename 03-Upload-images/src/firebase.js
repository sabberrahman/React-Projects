import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDqbB6q1K6ERq-Esa2A1DJ0kHclzeQNyfE",
    authDomain: "upload-files-7a50a.firebaseapp.com",
    projectId: "upload-files-7a50a",
    storageBucket: "upload-files-7a50a.appspot.com",
    messagingSenderId: "122905328667",
    appId: "1:122905328667:web:4ab448c71890f1b5780cbe"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);