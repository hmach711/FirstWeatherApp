
function refreshWeather(response) {
    let cityElement = document.querySelector("#location");
    cityElement.innerHTML = response.data.city;
    let temperatureElement = document.querySelector(".weather-app-unit");
    let temperature = response.data.temperature.current;
    let conditionElement=document.querySelector ("#condition");
    let humidityElement=document.querySelector ("#humidity");
    let windElement=document.querySelector ("#wind");


    temperatureElement.innerHTML = Math.round(temperature);
    conditionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
  windElement.innerHTML=`${response.data.wind.speed}km/ph`;
}
  function citySearch(city) {
    let apiKey = "df33e33bd04657eta6o8f2efea2aa5fb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
  }
  
  function weatherSearchForm(event) {
    event.preventDefault();
    let searchElement = document.querySelector("#search-city");
    citySearch(searchElement.value);
  }
  
  let weatherForm = document.querySelector("#search-form");
  weatherForm.addEventListener("submit", weatherSearchForm);