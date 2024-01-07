function weatherSearchForm (event){
event.preventDefault ();
let searchElement=document.querySelector ("#search-city");
let cityElement=document.querySelector ("#city");
cityElement.innerHTML=searchElement.value;


}




let weatherForm=document.querySelector ("#search-form");
weatherForm.addEventListener ("submit", weatherSearchForm);