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

const readLinks = async () => {
  try {
    const collectionRef = collection(fireStoreDb, "links");
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

const findMatchingLinks = async (email) => {
  const data = await readLinks();

  // links.push(data);
  // console.log(links);
  const passedCriteria = data.filter((obj) => obj.email === email);
  return passedCriteria;

  // console.log(data);
};

let admins = [];
const matchAndFindUser = async (selectedUser) => {
  const data = await readData();
  const booleanVal = [];

  data.forEach((snapshot) => {
    admins.push(snapshot.email);
    if (admins.indexOf(selectedUser) != -1) {
      booleanVal.push(true);

      return true;
    } else {
      booleanVal.push(false);
      return false;
    }
  });
  return booleanVal[0];
};

const matchUserPassword = async (selectedUser, password) => {
  const usersData = await readData();
  let userCheck = usersData.find((snapshot) => snapshot.email === selectedUser);

  //If User is found
  if (typeof userCheck != "undefined") {
    if (Object.keys(userCheck).length != 0) {
      if (userCheck.password === password) {
        // console.log("Password matches");
        return [true, userCheck.name];
      } else {
        // console.log("Password does not match.");
        return false;
      }
    }
  } else {
    // console.log(selectedUser, "is not stored on the database");
    return false;
  }
};

// To handle redirecting to other sites
const handleRedirect = async (id) => {
  try {
    const data = await readLinks();
    const passedCriteria = data.find((obj) => obj.shortURL === id);

    if (!passedCriteria) {
      return { longURL: "URL not found" };
    }

    return { longURL: passedCriteria.longURL };
  } catch (error) {
    console.error("Error handling redirect:", error);
    return { longURL: "Error occurred" };
  }
};

export {
  matchAndFindUser,
  matchUserPassword,
  findMatchingLinks,
  handleRedirect,
};
