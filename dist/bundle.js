/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/cityAppend.js":
/*!*************************************!*\
  !*** ./src/assets/js/cityAppend.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendResult)\n/* harmony export */ });\n/* harmony import */ var _cityClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cityClass.js */ \"./src/assets/js/cityClass.js\");\n\n\n\nlet city_object = new _cityClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet list_result = document.createElement('ul');\nlist_result.setAttribute('id', 'result-list');\nlet score_result = document.createElement('ul');\nscore_result.setAttribute('id', 'score-result');\n\nasync function appendResult(nameSearch, categorySearch, result){\n\n  // clear nodes\n  var child = list_result.lastElementChild; \n  while (child) {\n    list_result.removeChild(child);\n    child = list_result.lastElementChild;\n  }\n\n  result.innerHTML = \"<br><br>The following results are obatined:<br><br>\";  \n  if(nameSearch === ''){\n    list_result.textContent = \"The search by category is currently not possible.\";\n    // let response = await city_object.searchByCategory(categorySearch);\n  }\n  if(categorySearch === ''){\n    city_object.searchByName(nameSearch).then(response => {\n      const cities = response._embedded[\"city:search-results\"];\n      console.log(cities);\n      if(cities.length == 0){\n        list_result.textContent = \"Empty list\";\n        score_result.textContent = \"Empty score\";\n      }\n      else{\n        list_result.textContent = \" \";\n        cities.forEach(renderList);\n      }\n    });\n  }\n  // group list and scores to be shown\n  return [list_result, score_result];\n}\n\nfunction renderList(element){\n  let li = document.createElement('li');\n  li.setAttribute('class', 'item');\n  let a = document.createElement('a');\n  a.setAttribute('class', 'link-item');\n  a.href = '#';\n  // when the user click on the link, the scores appear\n  a.onclick = async function (){\n    let score = await city_object.searchById(element[\"_links\"][\"city:item\"][\"href\"]);\n    // clear nodes\n    var child = score_result.lastElementChild;\n    while (child) {\n      score_result.removeChild(child);\n      child = score_result.lastElementChild;\n    }\n    score_result.textContent = \" \";\n    if(score === '')\n      score_result.textContent = \"Empty score\";\n    else\n      score[\"categories\"].forEach(renderScores);\n  };\n  a.textContent = element[\"matching_full_name\"];\n  li.appendChild(a);\n  list_result.appendChild(li);\n}\n\nasync function renderScores(element){\n  let li = document.createElement('li');\n  li.setAttribute('class', 'item');\n  li.textContent = element[\"name\"] + \" : \" + element[\"score_out_of_10\"];\n  score_result.appendChild(li);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2NpdHlBcHBlbmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2tDOztBQUVsQyxzQkFBc0IscURBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcW9sLWpzLWFwcC8uL3NyYy9hc3NldHMvanMvY2l0eUFwcGVuZC5qcz9kNWNhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENpdHkgZnJvbSBcIi4vY2l0eUNsYXNzLmpzXCI7XG5cbmxldCBjaXR5X29iamVjdCA9IG5ldyBDaXR5KCk7XG5sZXQgbGlzdF9yZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xubGlzdF9yZXN1bHQuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN1bHQtbGlzdCcpO1xubGV0IHNjb3JlX3Jlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5zY29yZV9yZXN1bHQuc2V0QXR0cmlidXRlKCdpZCcsICdzY29yZS1yZXN1bHQnKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kUmVzdWx0KG5hbWVTZWFyY2gsIGNhdGVnb3J5U2VhcmNoLCByZXN1bHQpe1xuXG4gIC8vIGNsZWFyIG5vZGVzXG4gIHZhciBjaGlsZCA9IGxpc3RfcmVzdWx0Lmxhc3RFbGVtZW50Q2hpbGQ7IFxuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBsaXN0X3Jlc3VsdC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgY2hpbGQgPSBsaXN0X3Jlc3VsdC5sYXN0RWxlbWVudENoaWxkO1xuICB9XG5cbiAgcmVzdWx0LmlubmVySFRNTCA9IFwiPGJyPjxicj5UaGUgZm9sbG93aW5nIHJlc3VsdHMgYXJlIG9iYXRpbmVkOjxicj48YnI+XCI7ICBcbiAgaWYobmFtZVNlYXJjaCA9PT0gJycpe1xuICAgIGxpc3RfcmVzdWx0LnRleHRDb250ZW50ID0gXCJUaGUgc2VhcmNoIGJ5IGNhdGVnb3J5IGlzIGN1cnJlbnRseSBub3QgcG9zc2libGUuXCI7XG4gICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgY2l0eV9vYmplY3Quc2VhcmNoQnlDYXRlZ29yeShjYXRlZ29yeVNlYXJjaCk7XG4gIH1cbiAgaWYoY2F0ZWdvcnlTZWFyY2ggPT09ICcnKXtcbiAgICBjaXR5X29iamVjdC5zZWFyY2hCeU5hbWUobmFtZVNlYXJjaCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBjaXRpZXMgPSByZXNwb25zZS5fZW1iZWRkZWRbXCJjaXR5OnNlYXJjaC1yZXN1bHRzXCJdO1xuICAgICAgY29uc29sZS5sb2coY2l0aWVzKTtcbiAgICAgIGlmKGNpdGllcy5sZW5ndGggPT0gMCl7XG4gICAgICAgIGxpc3RfcmVzdWx0LnRleHRDb250ZW50ID0gXCJFbXB0eSBsaXN0XCI7XG4gICAgICAgIHNjb3JlX3Jlc3VsdC50ZXh0Q29udGVudCA9IFwiRW1wdHkgc2NvcmVcIjtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxpc3RfcmVzdWx0LnRleHRDb250ZW50ID0gXCIgXCI7XG4gICAgICAgIGNpdGllcy5mb3JFYWNoKHJlbmRlckxpc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIGdyb3VwIGxpc3QgYW5kIHNjb3JlcyB0byBiZSBzaG93blxuICByZXR1cm4gW2xpc3RfcmVzdWx0LCBzY29yZV9yZXN1bHRdO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0KGVsZW1lbnQpe1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcbiAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaW5rLWl0ZW0nKTtcbiAgYS5ocmVmID0gJyMnO1xuICAvLyB3aGVuIHRoZSB1c2VyIGNsaWNrIG9uIHRoZSBsaW5rLCB0aGUgc2NvcmVzIGFwcGVhclxuICBhLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICBsZXQgc2NvcmUgPSBhd2FpdCBjaXR5X29iamVjdC5zZWFyY2hCeUlkKGVsZW1lbnRbXCJfbGlua3NcIl1bXCJjaXR5Oml0ZW1cIl1bXCJocmVmXCJdKTtcbiAgICAvLyBjbGVhciBub2Rlc1xuICAgIHZhciBjaGlsZCA9IHNjb3JlX3Jlc3VsdC5sYXN0RWxlbWVudENoaWxkO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgc2NvcmVfcmVzdWx0LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgIGNoaWxkID0gc2NvcmVfcmVzdWx0Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuICAgIHNjb3JlX3Jlc3VsdC50ZXh0Q29udGVudCA9IFwiIFwiO1xuICAgIGlmKHNjb3JlID09PSAnJylcbiAgICAgIHNjb3JlX3Jlc3VsdC50ZXh0Q29udGVudCA9IFwiRW1wdHkgc2NvcmVcIjtcbiAgICBlbHNlXG4gICAgICBzY29yZVtcImNhdGVnb3JpZXNcIl0uZm9yRWFjaChyZW5kZXJTY29yZXMpO1xuICB9O1xuICBhLnRleHRDb250ZW50ID0gZWxlbWVudFtcIm1hdGNoaW5nX2Z1bGxfbmFtZVwiXTtcbiAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gIGxpc3RfcmVzdWx0LmFwcGVuZENoaWxkKGxpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyU2NvcmVzKGVsZW1lbnQpe1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcbiAgbGkudGV4dENvbnRlbnQgPSBlbGVtZW50W1wibmFtZVwiXSArIFwiIDogXCIgKyBlbGVtZW50W1wic2NvcmVfb3V0X29mXzEwXCJdO1xuICBzY29yZV9yZXN1bHQuYXBwZW5kQ2hpbGQobGkpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/cityAppend.js\n");

/***/ }),

/***/ "./src/assets/js/cityClass.js":
/*!************************************!*\
  !*** ./src/assets/js/cityClass.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ City)\n/* harmony export */ });\n\nclass City {\n  \n  constructor(){\n    this.site = 'https://api.teleport.org/api/';\n    this.idPrefix = \"geonameid:\";\n    this.lengthIdPrefix = this.idPrefix.length; \n    this.optionalKey = \"city:urban_area\";\n  }\n\n  async searchByName(param){\n    let request = await fetch(`${this.site}cities/?search=${param}`);\n    let response = await request.json();\n    return response;\n  }\n\n  async searchById(param){\n    // first decode the id\n    console.log(param);\n    let index = param.indexOf(this.idPrefix);\n    let id = param.slice(index+this.lengthIdPrefix, -1); // remove the '/'\n    // search the url (it always exists)\n    let url_request = await fetch(`${this.site}/cities/${this.idPrefix}${id}/`);\n    let url_response = await url_request.json();\n    console.log(url_response);\n    // then search for scores (IF exist)\n    try{\n      let score_request = await fetch(url_response[\"_links\"][this.optionalKey][\"href\"]+\"scores/\");\n      let score_response = await score_request.json();\n      console.log(score_response);\n      return score_response\n    } catch(e){\n      console.log(\"ERROR : \" + e);\n      return '';\n    }\n  }\n\n  get teleportSite(){\n    return this.site;\n  }\n\n  set teleportSite(site){\n    this.site = site;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2NpdHlDbGFzcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsVUFBVSxpQkFBaUIsTUFBTTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQSxxQ0FBcUMsVUFBVSxVQUFVLGNBQWMsRUFBRSxHQUFHO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcW9sLWpzLWFwcC8uL3NyYy9hc3NldHMvanMvY2l0eUNsYXNzLmpzPzEwMmMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXR5IHtcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5zaXRlID0gJ2h0dHBzOi8vYXBpLnRlbGVwb3J0Lm9yZy9hcGkvJztcbiAgICB0aGlzLmlkUHJlZml4ID0gXCJnZW9uYW1laWQ6XCI7XG4gICAgdGhpcy5sZW5ndGhJZFByZWZpeCA9IHRoaXMuaWRQcmVmaXgubGVuZ3RoOyBcbiAgICB0aGlzLm9wdGlvbmFsS2V5ID0gXCJjaXR5OnVyYmFuX2FyZWFcIjtcbiAgfVxuXG4gIGFzeW5jIHNlYXJjaEJ5TmFtZShwYXJhbSl7XG4gICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNpdGV9Y2l0aWVzLz9zZWFyY2g9JHtwYXJhbX1gKTtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBzZWFyY2hCeUlkKHBhcmFtKXtcbiAgICAvLyBmaXJzdCBkZWNvZGUgdGhlIGlkXG4gICAgY29uc29sZS5sb2cocGFyYW0pO1xuICAgIGxldCBpbmRleCA9IHBhcmFtLmluZGV4T2YodGhpcy5pZFByZWZpeCk7XG4gICAgbGV0IGlkID0gcGFyYW0uc2xpY2UoaW5kZXgrdGhpcy5sZW5ndGhJZFByZWZpeCwgLTEpOyAvLyByZW1vdmUgdGhlICcvJ1xuICAgIC8vIHNlYXJjaCB0aGUgdXJsIChpdCBhbHdheXMgZXhpc3RzKVxuICAgIGxldCB1cmxfcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke3RoaXMuc2l0ZX0vY2l0aWVzLyR7dGhpcy5pZFByZWZpeH0ke2lkfS9gKTtcbiAgICBsZXQgdXJsX3Jlc3BvbnNlID0gYXdhaXQgdXJsX3JlcXVlc3QuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHVybF9yZXNwb25zZSk7XG4gICAgLy8gdGhlbiBzZWFyY2ggZm9yIHNjb3JlcyAoSUYgZXhpc3QpXG4gICAgdHJ5e1xuICAgICAgbGV0IHNjb3JlX3JlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmxfcmVzcG9uc2VbXCJfbGlua3NcIl1bdGhpcy5vcHRpb25hbEtleV1bXCJocmVmXCJdK1wic2NvcmVzL1wiKTtcbiAgICAgIGxldCBzY29yZV9yZXNwb25zZSA9IGF3YWl0IHNjb3JlX3JlcXVlc3QuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coc2NvcmVfcmVzcG9uc2UpO1xuICAgICAgcmV0dXJuIHNjb3JlX3Jlc3BvbnNlXG4gICAgfSBjYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgOiBcIiArIGUpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZWxlcG9ydFNpdGUoKXtcbiAgICByZXR1cm4gdGhpcy5zaXRlO1xuICB9XG5cbiAgc2V0IHRlbGVwb3J0U2l0ZShzaXRlKXtcbiAgICB0aGlzLnNpdGUgPSBzaXRlO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/js/cityClass.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js\");\n/* harmony import */ var _assets_js_cityAppend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/cityAppend.js */ \"./src/assets/js/cityAppend.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__]);\nhttps_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Import the functions you need from the SDKs you need\n //\"firebase/app\";\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCoCHiydidqcR3ZsPNMlDArmm-rUC-vagk\",\n  authDomain: \"qol-js-web-app.firebaseapp.com\",\n  projectId: \"qol-js-web-app\",\n  storageBucket: \"qol-js-web-app.appspot.com\",\n  messagingSenderId: \"911797596776\",\n  appId: \"1:911797596776:web:00673f519fd894f0ef81dd\"\n};\n\n// Initialize Firebase\nconst app = (0,https_www_gstatic_com_firebasejs_9_15_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n\n// \"\";\n\n\n\nconst search = document.getElementById(\"submit-search\");\nconst nameSearch = document.querySelector(\"input\");\nconst categorySearch = document.querySelector(\"select\");\nconst result = document.getElementById(\"result-search\");\n\nsearch.addEventListener(\"click\", async (e) => {\n  if(nameSearch.value === '' && categorySearch.value === ''){\n    e.preventDefault();\n    result.innerHTML = \"You need to fill one field.\";\n  }\n  else if(nameSearch.value != '' && categorySearch.value != ''){\n    e.preventDefault();\n    result.innerHTML = \"You need to fill ONLY one field.\";\n  }\n  else{\n    // append the list of cities and the corresponding scores\n    let response = await (0,_assets_js_cityAppend_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(nameSearch.value, categorySearch.value, result);\n    result.append(response[0], response[1]);\n  }\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDMEYsQ0FBQztBQUMzRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksc0dBQWE7O0FBRXpCOztBQUVxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvRUFBWTtBQUNyQztBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcW9sLWpzLWFwcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjE1LjAvZmlyZWJhc2UtYXBwLmpzXCI7IC8vXCJmaXJlYmFzZS9hcHBcIjtcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDb0NIaXlkaWRxY1IzWnNQTk1sREFybW0tclVDLXZhZ2tcIixcbiAgYXV0aERvbWFpbjogXCJxb2wtanMtd2ViLWFwcC5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcInFvbC1qcy13ZWItYXBwXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicW9sLWpzLXdlYi1hcHAuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTExNzk3NTk2Nzc2XCIsXG4gIGFwcElkOiBcIjE6OTExNzk3NTk2Nzc2OndlYjowMDY3M2Y1MTlmZDg5NGYwZWY4MWRkXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG4vLyBcIlwiO1xuXG5pbXBvcnQgYXBwZW5kUmVzdWx0IGZyb20gXCIuL2Fzc2V0cy9qcy9jaXR5QXBwZW5kLmpzXCI7XG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXNlYXJjaFwiKTtcbmNvbnN0IG5hbWVTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBjYXRlZ29yeVNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdC1zZWFyY2hcIik7XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcbiAgaWYobmFtZVNlYXJjaC52YWx1ZSA9PT0gJycgJiYgY2F0ZWdvcnlTZWFyY2gudmFsdWUgPT09ICcnKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVzdWx0LmlubmVySFRNTCA9IFwiWW91IG5lZWQgdG8gZmlsbCBvbmUgZmllbGQuXCI7XG4gIH1cbiAgZWxzZSBpZihuYW1lU2VhcmNoLnZhbHVlICE9ICcnICYmIGNhdGVnb3J5U2VhcmNoLnZhbHVlICE9ICcnKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVzdWx0LmlubmVySFRNTCA9IFwiWW91IG5lZWQgdG8gZmlsbCBPTkxZIG9uZSBmaWVsZC5cIjtcbiAgfVxuICBlbHNle1xuICAgIC8vIGFwcGVuZCB0aGUgbGlzdCBvZiBjaXRpZXMgYW5kIHRoZSBjb3JyZXNwb25kaW5nIHNjb3Jlc1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFwcGVuZFJlc3VsdChuYW1lU2VhcmNoLnZhbHVlLCBjYXRlZ29yeVNlYXJjaC52YWx1ZSwgcmVzdWx0KTtcbiAgICByZXN1bHQuYXBwZW5kKHJlc3BvbnNlWzBdLCByZXNwb25zZVsxXSk7XG4gIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;