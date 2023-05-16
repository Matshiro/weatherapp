import '../styles/styles.css';
import imgCloud from '../images/cloud.svg';
import imgCloudyDay from '../images/cloudy-day.svg';
import imgCloudyNight from '../images/cloudy-night.svg';
import imgCloudy from '../images/cloudy.svg';
import imgHumidity from '../images/humidity.svg';
import imgLightning from '../images/lightning.svg';
import imgMoon from '../images/moon.svg';
import imgRainy from '../images/rainy.svg';
import imgSnow from '../images/snow.svg';
import imgSun from '../images/sun.svg';
import imgThermo from '../images/thermo.svg';
import imgWind from '../images/wind.svg';
import imgBino from '../images/binoculars.svg';
import imgPressure from '../images/pressure.svg';

const SUPER_SAFE_API_KEY = "af505786e986356b428ac52fb8b32832";

const mainTemperature = document.getElementById("mainTemperature");
const mainCityName = document.getElementById("mainName");
const mainStatus = document.getElementById("mainStatus");
const mainIcon = document.getElementById("mainIcon");

const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const chanceOfRain = document.getElementById("chanceOfRain");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");


let cityName;
let units = "metric";


//Temporal variables
let statCityName = "Wałbrzych"
let statTemperature = 10;
let statStatus = "częściowe zachmurzenie";
let statHumidity = 76;
let statFeelsLike = 9;
let statChanceOfRain = 20;
let statWindSpeed = 3.7;
let statPressure = 1016;
//Temporal variables


buildingSite();
testApi();

function buildingSite(){
    cityName = statCityName;
    mainTemperature.textContent = statTemperature + " °C";
    mainCityName.textContent = cityName;
    mainStatus.textContent = statStatus;
    mainIcon.src = imgRainy;
}






// document.addEventListener("DOMContentLoaded", function() {
//     checkLocalStorage();
//   });



async function testApi(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${SUPER_SAFE_API_KEY}&units=${units}&lang=pl`);
    const data = await response.json();
    // const h3Text = data.weather[0].description;
    // const h3TextFirstUpperCase = h3Text.charAt(0).toUpperCase() + h3Text.slice(1); 
    // const img = document.getElementById("mainIcon");
    // h1.textContent = parseInt(data.main.temp) + " °C";
    // h2.textContent = data.name;
    // h3.textContent = h3TextFirstUpperCase;
    return console.log(data);
}