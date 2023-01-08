
import City from "./cityClass.js";

let city_object = new City();

export default async function appendResult(nameSearch, categorySearch, result){
  result.innerHTML = "The following results are obatined:";
  const list_result = document.createElement('ul');
  list_result.setAttribute('id', 'result-list');
  if(nameSearch === ''){
    // let response = await city_object.searchByCategory(categorySearch);
    console.log('NONONONOO');
  }
  if(categorySearch === ''){
    city_object.searchByName(nameSearch).then(response => {
      console.log(response._embedded["city:search-results"][0]["_links"]["city:item"]["href"]);
    });
  }
    

}