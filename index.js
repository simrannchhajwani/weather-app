const apiKey="8ed11dce0d6bd862020649b656182724";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchButton= document.querySelector(".search button");
const weatherIcon =document.querySelector(".cloud-image");
const backgroundcolor = document.querySelector(".card");


async function checkWeather(city){
const response = await fetch( apiUrl + city + `&appid=${apiKey}`);
var data= await response.json();

console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.main.weather = "Clouds"){
    weatherIcon.src="./images/clouds.png";
    
}

else if(data.main.weather="Clear"){
    weatherIcon.src="./images/clear.png";    
}

else if(data.main.weather="Drizzle"){
    weatherIcon.src="./images/drizzle.png";
}

else if(data.main.weather="Mist"){
    weatherIcon.src="./images/mist.png";
}

else if(data.main.weather="Rain"){
    weatherIcon.src="./images/rain.png";
}

document.querySelector(".new").style.display="block";

}

searchButton.addEventListener("click", ()=>{
     checkWeather(searchBox.value);
})


