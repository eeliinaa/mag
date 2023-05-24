 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAR_RJPT9RIwjX_Or__0judbyHZ8Vklv4",
  authDomain: "plms-23270.firebaseapp.com",
  databaseURL: "https://plms-23270-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plms-23270",
  storageBucket: "plms-23270.appspot.com",
  messagingSenderId: "647477021041",
  appId: "1:647477021041:web:020f8ebf6c0283d8e0ced0"
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);