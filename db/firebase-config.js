// Import the functions you need from the SDKs you need

const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  getDocs,
} = require("firebase/firestore");

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

let fireStoreDb = getFirestore();

// const initializeFireAppFunc = () => {
//   try {
//     const app = initializeApp(firebaseConfig);
//     return app;
//   } catch (error) {
//     console.log(error);
//   }
// };

let testObj = {
  name: "Test out ",
  age: 16,
  height: "6'9",
  date: new Date(),
};

const setData = async () => {
  try {
    const document = doc(fireStoreDb, "user", "Fred");
    await setDoc(document, testObj);
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

const readData = async () => {
  try {
    const collectionRef = collection(fireStoreDb, "user");
    const responseData = [];
    const q = query(collectionRef);

    const docSnap = await getDocs(q);

    docSnap.forEach((doc) => {
      responseData.push(doc.data());
    });

    return responseData;
  } catch (error) {
    console.log(error);
  }
};

const crFunc = async () => {
  await setData();
  const data = await readData();
  data.forEach((query) => {
    console.log(query);
  });
};
crFunc();
// module.exports = { fireStoreDb};
