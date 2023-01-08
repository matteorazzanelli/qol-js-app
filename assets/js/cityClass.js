
export default class City {
  
  constructor(){
    this.site = 'https://api.teleport.org/api/';
  }

  async searchByName(param){
    let request = await fetch(`${this.site}cities/?search=${param}`);
    let response = await request.json();
    return response;
  }

  async searchByCategory(param){
    return 0;
  }

  async searchById(){
    let request = await fetch(`${this.site}/cities/geonameid:5391959/`);
    let response = await request.json();
  
    return response;
  }

  get teleportSite(){
    return this.site;
  }

  set teleportSite(site){
    this.site = site;
  }
}