
function refreshWeather(response) {
    let cityElement = document.querySelector("#location");
  
    let temperatureElement = document.querySelector(".weather-app-unit");
    let temperature = response.data.temperature.current;
    let conditionElement=document.querySelector ("#condition");
    let humidityElement=document.querySelector ("#humidity");
    let windElement=document.querySelector ("#wind");
let timeElement=document.querySelector ("#time");
let date=new Date(response.data.time *1000);
let iconElement=document.querySelector ("#icon");


function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()]; 

    if (minutes<10) {
        minutes=`0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
}


timeElement.innerHTML=formatDate(date);
cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    conditionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
  windElement.innerHTML=`${response.data.wind.speed}km/ph`;
iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" "class=weather-app-emoji"/>`;


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

  function displayForecast() {
    let days = ["Mon", "Tues", "Wed", "Thurs"];
    let forecastHtml = "";
  
    days.forEach( function(day) {
      forecastHtml= 
      forecastHtml+`
    <div class="forecast">
            <div class="forecast-date">${day}</div>
          </div>
          <div class="temperature-wrapper">
            <span class="max-temp">7&deg;</span>
            <span class="min-temp">3&deg;</span>
          </div>
        </div>`;
    });
  
   
  
    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
  }
  
  let weatherForm = document.querySelector("#search-form");
  weatherForm.addEventListener("submit", weatherSearchForm);

  citySearch("London");
  displayForecast ();