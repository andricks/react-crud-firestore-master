import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD5XnJ7xf0UAWbkg82c8iGDbLuTSm7WlDc",
  authDomain: "examenfinalpart2.firebaseapp.com",
  databaseURL: "https://examenfinalpart2-default-rtdb.firebaseio.com",
  projectId: "examenfinalpart2",
  storageBucket: "examenfinalpart2.appspot.com",
  messagingSenderId: "220346778411",
  appId: "1:220346778411:web:f05ffacf440cf4b653bb6e",
  measurementId: "G-RYJ21GNJPT"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
