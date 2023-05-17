import '../styles/styles.css';
import imgCloud from '../images/cloud.svg';
import imgCloudyDay from '../images/cloudy-day.svg';
import imgCloudyNight from '../images/cloudy-night.svg';
import imgCloudy from '../images/cloudy.svg';
import imgHumidity from '../images/humidity.svg';
import imgLightning from '../images/lightning.svg';
import imgMist from '../images/mist.svg'
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

const feelsLike = document.getElementById("feelsLikeText");
const humidity = document.getElementById("humidityText");
const chanceOfRain = document.getElementById("chanceOfRainText");
const windSpeed = document.getElementById("windSpeedText");
const pressure = document.getElementById("pressureText");
const visibility = document.getElementById("visibilityText");


let cityName = "wałbrzych";
let units = "metric";


getWeatherData();
getUnits();

// document.addEventListener("DOMContentLoaded", function() {
//     checkLocalStorage();
//   });




async function getApiWeatherData(){
    let weatherData;
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${SUPER_SAFE_API_KEY}&units=${units}&lang=pl`);
        const data = await response.json();
        weatherData = data;
        console.log(data);
    }
    catch(e){
        console.log("Something happened:\n" + e);
        weatherData = null;
    }
    finally{
        return weatherData;
    }
}

async function getApiForecastData(){
    let forecastData;
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${SUPER_SAFE_API_KEY}`);
        const data = await response.json();
        forecastData = data;
        console.log(data);
    }
    catch(e){
        console.log("Something happened:\n" + e);
        forecastData = null;
    }
    finally{
        return forecastData;
    }
}

async function getWeatherData(){
    const weatherData = await getApiWeatherData();
    const forecastData = await getApiForecastData();

    if (weatherData != null){
        todayWeather(weatherData, forecastData.list[0].pop);
    }
}


function todayWeather(data, pop){
    mainTemperature.textContent = parseInt(data.main.temp) + getUnits().tempUnit;
    mainCityName.textContent = data.name;
    mainIcon.src = getIcon(data.weather[0].icon);
    mainStatus.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

    feelsLike.textContent = parseInt(data.main.feels_like) + getUnits().tempUnit;
    humidity.textContent = data.main.humidity + "%";
    chanceOfRain.textContent = pop * 100 + "%";
    visibility.textContent = getVisibility(data.visibility) + getUnits().distanceUnit;
    windSpeed.textContent = parseInt(data.wind.speed) + getUnits().speedUnit;
    pressure.textContent = data.main.pressure + " hPa";
}

function getUnits(){
    let tempUnit = "°C";
    let speedUnit = " Km/h";
    let distanceUnit = "m";

    if (units === "imperial"){
        tempUnit = "°F";
        speedUnit = "Mph";
        distanceUnit = "Feet";
    }

    return {tempUnit, speedUnit, distanceUnit}
}

function getVisibility(visibility){
    let returnValue = 0;
    if (visibility >= 10000){
        return ">10 K";
    }
    if (visibility < 10000 && visibility >= 1000){
        const firstDigit = visibility.toString().charAt(0);
        const secondDigit = visibility.toString().charAt(1);
        returnValue = firstDigit + "." + secondDigit + " K";
        return returnValue;
        // return visibility.toString().substring(0,2);
    }
    if (visibility < 1000){
        return visibility + " ";
    }
}

function forecastWeather(data){

}

function getIcon(id){
    switch (id){
        case "01d":
            return imgSun;
        case "02d":
            return imgCloudyDay;
        case "03d":
            return imgCloud;
        case "04d":
            return imgCloudy;
        case "09d":
            return imgRainy;
        case "10d":
            return imgRainy;
        case "11d":
            return imgLightning;
        case "13d":
            return imgSnow;
        case "50d":
            return imgMist;
    }
}