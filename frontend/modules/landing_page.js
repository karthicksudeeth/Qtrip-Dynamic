import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  console.log("hello from init");
  console.log(config.backendEndpoint);
  console.log(cities);

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
  let cityList=await fetch(config.backendEndpoint+ `/cities`);
  let data=await cityList.json();
  return data;
  }
  catch(err){
    return null;
  }


}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let card=document.getElementById("data");
  let newCard= `
    <div class="col-md-6 col-lg-3 mb-4">
          <a href="pages/adventures/?city=${id}" id=${id}>
          
            <div class="tile justify-content-center align-items-end
            ">
              <div class="tile-text text-white text-center"> 
                <h6>${city} </h6>
              <p>${description}</p>
              </div>
              <img 
              src="${image}" alt="${city}"
              />
             
            </div>
          </a>
        </div>
    `;
  card.innerHTML+=newCard;

}

export { init, fetchCities, addCityToDOM };
