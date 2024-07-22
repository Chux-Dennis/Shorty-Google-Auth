import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { userSchema } from "./schema";

import { firebaseConfig } from "../db/db-config";

const app = initializeApp(firebaseConfig);
let fireStoreDb = getFirestore();

const setData = async (user, email, password) => {
  try {
    const document = doc(fireStoreDb, "user", email);
    await setDoc(document, userSchema(user, email, password));
    // console.log("Document successfully written!");
  } catch (error) {
    // console.error("Error writing document: ", error);  
  }
};

export { setData };
