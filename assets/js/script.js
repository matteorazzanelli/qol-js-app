



async function getAllBooks(param){
  // let request = await fetch(`https://openlibrary.org/subjects/${param}.json`);
  let request = await fetch(`https://api.teleport.org/api/cities/?search=${param}`);
  let response = await request.json();

  return response;
}

getAllBooks('san francisco').then(response => {
  console.log(response._embedded["city:search-results"][0]["_links"]["city:item"]);
}).catch(e =>{
  console.log('ERROR');
});


async function getAllBooks2(param){
  let request = await fetch(`https://api.teleport.org/api/urban_areas/slug:${param}/scores/`);
  let response = await request.json();

  return response;
}

getAllBooks2('san-francisco-bay-area').then(response => {
  console.log(response);
}).catch(e =>{
  console.log('ERROR');
});