// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; //"firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoCHiydidqcR3ZsPNMlDArmm-rUC-vagk",
  authDomain: "qol-js-web-app.firebaseapp.com",
  projectId: "qol-js-web-app",
  storageBucket: "qol-js-web-app.appspot.com",
  messagingSenderId: "911797596776",
  appId: "1:911797596776:web:00673f519fd894f0ef81dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// "";

import appendResult from "./assets/js/cityAppend.js";

const search = document.getElementById("submit-search");
const nameSearch = document.querySelector("input");
const categorySearch = document.querySelector("select");
const result = document.getElementById("result-search");

search.addEventListener("click", async (e) => {
  if(nameSearch.value === '' && categorySearch.value === ''){
    e.preventDefault();
    result.innerHTML = "You need to fill one field.";
  }
  else if(nameSearch.value != '' && categorySearch.value != ''){
    e.preventDefault();
    result.innerHTML = "You need to fill ONLY one field.";
  }
  else{
    // append the list of cities and the corresponding scores
    let response = await appendResult(nameSearch.value, categorySearch.value, result);
    result.append(response[0], response[1]);
  }
});