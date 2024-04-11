//Now we fetch the api i.e. collection live data 
// In Url after the apiid='is the api key which was always same if you were picking the data from https://api.openweathermap.org this wesite, and we remove that api key and paste it on the apikey variable'
const apiKey = "e7da9a9595e7b5b95d8674534aa72316";

//In apiUrl last we added matric that's the unit of the data which is tempreture in celcius
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
//"https://api.openweathermap.org/data/2.5/weather?'till here the website link'q=Germany'till here the name of the city '&appid=e7da9a9595e7b5b95d8674534aa72316'till here the api key'&units=metric'this was the unit of data i.e. metric'"

//we can evaluate city as well as api key b'cuz we change the city name as per user
const searchBox = document.querySelector(".search input");
const weathericon = document
//here we declare the variable name searchBox, which was take HTML element search input
const searchBtn = document.querySelector(".search button")
async function checkWeather(city){
    try {
    //now we created new function i.e. async function and it parameter await
    //await contain fetch() method which help to fetch URL.
    //apiUrl + `&appid=${apiKey}`  this works apiUrl&appid=e7da9a9595e7b5b95d8674534aa72316
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    //var data will take that Url await and then response and then it convert into json data, which was object contain varius data
    var data = await response.json();
    //Now we have to update the or show the json() data to the website so, we use DOM to update the real time data to HTML page
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "clouds"){
        
    }
    }
    catch(error){
        alert("Check your internet")
    }
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})