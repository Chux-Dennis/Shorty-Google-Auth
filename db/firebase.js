// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
const initializeApp = require("firebase/firebase-app");
const getDatabase = require("firebase/database");
const ref = require("firebase/database");
const set = require("firebase/database");
const push = require("firebase/database");

const firebaseConfig = {
  databaseURL:
    "https://linkbreak-941ab-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const usersDb = ref(database, "linkBreakUsers");

const addUser = (data) => {
  push(usersDb, data);
};

module.exports = addUser;
