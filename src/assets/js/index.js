import appendResult from "./cityAppend.js";

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