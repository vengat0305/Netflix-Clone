// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMq-ewBUrwOH7IcBhXozyxiLaBt6kB0bo",
  authDomain: "netflix-clone-react-fb628.firebaseapp.com",
  projectId: "netflix-clone-react-fb628",
  storageBucket: "netflix-clone-react-fb628.appspot.com",
  messagingSenderId: "502127960190",
  appId: "1:502127960190:web:febc6ed88ff2ec9de6782f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
