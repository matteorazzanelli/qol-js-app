
export default class City {
  
  constructor(){
    this.site = 'https://api.teleport.org/api/';
    this.idPrefix = "geonameid:";
    this.lengthIdPrefix = this.idPrefix.length; 
    this.optionalKey = "city:urban_area";
  }

  async searchByName(param){
    let request = await fetch(`${this.site}cities/?search=${param}`);
    let response = await request.json();
    return response;
  }

  async searchById(param){
    // first decode the id
    console.log(param);
    let index = param.indexOf(this.idPrefix);
    let id = param.slice(index+this.lengthIdPrefix, -1); // remove the '/'
    // search the url (it always exists)
    let url_request = await fetch(`${this.site}/cities/${this.idPrefix}${id}/`);
    let url_response = await url_request.json();
    console.log(url_response);
    // then search for scores (IF exist)
    try{
      let score_request = await fetch(url_response["_links"][this.optionalKey]["href"]+"scores/");
      let score_response = await score_request.json();
      console.log(score_response);
      return score_response
    } catch(e){
      console.log("ERROR : " + e);
      return '';
    }
  }

  get teleportSite(){
    return this.site;
  }

  set teleportSite(site){
    this.site = site;
  }
}