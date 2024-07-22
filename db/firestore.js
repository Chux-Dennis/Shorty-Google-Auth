const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  getDocs,
} = require("firebase/firestore");
const { firebaseConfig } = require("./db-config");

const app = initializeApp(firebaseConfig);
let fireStoreDb = getFirestore();

let testObj = {
  name: "Dennis Chukwuemeka ",
  age: 16,
  height: "6'9",
  date: new Date(),
};

const setData = async () => {
  try {
    const document = doc(fireStoreDb, "user", "Killer");
    await setDoc(document, testObj);
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};
