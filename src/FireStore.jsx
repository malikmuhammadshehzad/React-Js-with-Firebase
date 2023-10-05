import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArcmO2xqcgWcVZLv7u692c0rPhqg3qUSw",
  authDomain: "dashboard-5cf11.firebaseapp.com",
  projectId: "dashboard-5cf11",
  storageBucket: "dashboard-5cf11.appspot.com",
  messagingSenderId: "624188001398",
  appId: "1:624188001398:web:4cf64fc0824827b348a357",
  measurementId: "G-LQ4HBH14W1",
};
// init firebase app

initializeApp(firebaseConfig);

// init services

const db = getFirestore();

// collection ref

const colRef = collection(db, "books");

// get collection data

// getDocs(colRef)
//   .then((snapshot) => {
//     let books = [];
//     snapshot.docs.forEach((doc) => {
//       console.log(doc);
//       books.push({ ...doc.data(), id: doc.id });
    
//     });
//     console.log(books);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
export {
  db,
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
};
