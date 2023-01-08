
import appendResult from "./cityAppend.js";


// variabile.searchByName('san francisco').then(response => {
//   console.log(response._embedded["city:search-results"][0]["_links"]["city:item"]["href"]);
// }).catch(e =>{
//   console.log('ERROR');
// });

// variabile.searchById('').then(response => {
//   console.log(response["_links"]["city:urban_area"]["href"]+"scores/");
// }).catch(e =>{
//   console.log('ERROR');
// });

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
    let append_response = await appendResult(nameSearch.value, categorySearch.value, result);
  }
});