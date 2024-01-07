function refreshWeather (response){
let temperatureElement=document.querySelector ("#temperature-unit");
let temperature=response.data.temperature.current;
temperatureElement.innerHTML=Math.round (temperature);
}


function citySearch (city){
let apiKey="df33e33bd04657eta6o8f2efea2aa5fb";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get (apiUrl).then(refreshWeather);

}

function weatherSearchForm (event){
event.preventDefault ();
let searchElement=document.querySelector ("#search-city");
let cityElement=document.querySelector ("#location");
cityElement.innerHTML=searchElement.value;

citySearch(searchElement.value);
}

let weatherForm=document.querySelector ("#search-form");
weatherForm.addEventListener ("submit", weatherSearchForm);

