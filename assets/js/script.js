

// let prova = fetch("https://api.teleport.org/api/cities/?search=san%20francisco");
// let response = await prova.json();
// let request = await fetch('https://api.teleport.org/api/');
// let response = request.json();

async function getAllBooks(param){
  // let request = await fetch(`https://openlibrary.org/subjects/${param}.json`);
  let request = await fetch(`https://api.teleport.org/api/cities/?search=san%20francisco`);
  let response = await request.json();

  return response;
}

getAllBooks('san%20francisco').then(response => {
  console.log(response);
}).catch(e =>{
  console.log('ERROR');
});