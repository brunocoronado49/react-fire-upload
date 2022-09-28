// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { v4 } from 'uuid'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKgujNcEa6PFAFzCOUrstB5ly5UPwib58",
  authDomain: "react-login-3e58c.firebaseapp.com",
  projectId: "react-login-3e58c",
  storageBucket: "react-login-3e58c.appspot.com",
  messagingSenderId: "885885256919",
  appId: "1:885885256919:web:b7f747bb84678077f6dc92",
  measurementId: "G-ZPMVSEQBXE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app)

export const upload = async (file) => {
  const storageRef = ref(storage, v4())
  return await uploadBytes(storageRef, file)
}