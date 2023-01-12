// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUHd1HBfyWBTNFrqLtrvo58D5kf5_1K8Q",
  authDomain: "fontdes-1c0f9.firebaseapp.com",
  projectId: "fontdes-1c0f9",
  storageBucket: "fontdes-1c0f9.appspot.com",
  messagingSenderId: "688101234734",
  appId: "1:688101234734:web:eaa6803fc860c4e93e67bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)