import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  addDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";

import { firebaseConfig } from "../db/db-config";

const app = initializeApp(firebaseConfig);
let fireStoreDb = getFirestore();
import { URLSchema } from "./schema";

const setLinks = async (longURL, shortURL, email, name) => {
  try {
    const documentRef = doc(fireStoreDb, "links", shortURL);
    await setDoc(documentRef, {
      longURL: longURL,
      shortURL: shortURL,
      email: email,
      name: name,
      timestamp: new Date(),
    });
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

export { setLinks };
