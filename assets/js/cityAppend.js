
import City from "./cityClass.js";

let city_object = new City();
let list_result = document.createElement('ul');
list_result.setAttribute('id', 'result-list');
let score_result = document.createElement('ul');
score_result.setAttribute('id', 'score-result');

export default async function appendResult(nameSearch, categorySearch, result){
  result.innerHTML = "<br><br>The following results are obatined:<br><br>";  
  if(nameSearch === ''){
    // let response = await city_object.searchByCategory(categorySearch);
    console.log('NONONONOO');
  }
  if(categorySearch === ''){
    city_object.searchByName(nameSearch).then(response => {
      const cities = response._embedded["city:search-results"];
      console.log(cities);
      if(cities.length == 0){
        list_result.textContent = "Empty list";
        score_result.textContent = "Empty score";
      }
      else{
        cities.forEach(renderList);
      }
    });
  }
  // group list and scores to be shown
  return [list_result, score_result];
}

function renderList(element){
  let li = document.createElement('li');
  li.setAttribute('class', 'item');
  let a = document.createElement('a');
  a.setAttribute('class', 'link-item');
  a.href = '#';
  // when the user click on the link, the scores appear
  a.onclick = async function (){
    let score = await city_object.searchById(element["_links"]["city:item"]["href"]);
    if(score === '')
      score_result.textContent = "Empty score";
    else
      score["categories"].forEach(renderScores);
  };
  a.textContent = element["matching_full_name"];
  li.appendChild(a);
  list_result.appendChild(li);
}

async function renderScores(element){
  let li = document.createElement('li');
  li.setAttribute('class', 'item');
  li.textContent = element["name"] + " : " + element["score_out_of_10"];
  score_result.appendChild(li);
}