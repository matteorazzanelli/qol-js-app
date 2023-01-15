// Import the functions you need from the SDKs you need
import { initializeApp } from  "firebase/app"; //"https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdmzvm4uE2snN_RRomwyTeUdha_w0ZZg8",
  authDomain: "js-qol.firebaseapp.com",
  projectId: "js-qol",
  storageBucket: "js-qol.appspot.com",
  messagingSenderId: "475503748012",
  appId: "1:475503748012:web:f76b14335c53ce1abc1009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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