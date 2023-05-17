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
import '../images/search.svg';

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

const searchButton = document.getElementById("searchButton");
const userInput = document.getElementById("searchBarInput");
const fiveDayWeather = document.getElementById("fiveDayWeather");

let cityName = "wałbrzych";
let units = "metric";


getWeatherData();
getUnits();

searchButton.addEventListener("click", findTown);
userInput.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        findTown();
    }
});


async function getApiWeatherData(){
    let weatherData;
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${SUPER_SAFE_API_KEY}&units=${units}&lang=pl`);
        const data = await response.json();
        weatherData = data;
        return weatherData;
    }
    catch(e){
        console.log("Something happened:\n" + e);
        weatherData = null;
    }

}

async function getApiForecastData(){
    let forecastData;
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${SUPER_SAFE_API_KEY}&units=${units}&lang=pl`);
        const data = await response.json();
        forecastData = data;
        console.log(data);
        return forecastData;
    }
    catch(e){
        console.log("Something happened:\n" + e);
        forecastData = null;
    }
}

async function getWeatherData(){
    try{
        const weatherData = await getApiWeatherData();
        const forecastData = await getApiForecastData();
        if (weatherData != null){
            todayWeather(weatherData, forecastData.list[0].pop);
        }
        if (forecastData != null){
            forecastWeather(forecastData);
        }
    }
    catch(e){
        userInput.placeholder = "Enter valid town name.";
        userInput.value = "";
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

async function forecastWeather(data){
    try{
        const timestampsDay = await getDateOfNextDays();
        const timestampsNight = await(getDateOfNextNights());
        const filteredForecastsDay = data.list.filter(forecast => {
            const forecastTimestamp = forecast.dt;
            return timestampsDay.includes(forecastTimestamp);
        });
        const filteredForecastsNight = data.list.filter(forecast => {
            const forecastTimestamp = forecast.dt;
            return timestampsNight.includes(forecastTimestamp);
        });
        setDataToNextFiveDays(filteredForecastsDay, filteredForecastsNight);
    }
    catch(e){
        console.log("Something happened: \n" + e);
    }
}

function getUnixTimestampTomorrowDay(i){
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getUTCDate() + i);
    tomorrow.setUTCHours(12,0,0,0);
    return Math.floor(tomorrow.getTime() / 1000);
}

function getUnixTimestampTomorrowNight(i){
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getUTCDate() + i);
    tomorrow.setUTCHours(24,0,0,0);
    return Math.floor(tomorrow.getTime() / 1000);
}

async function getDateOfNextDays() {
    const timestamps = [];
    for (let i = 0; i < 6; i++) {
      const timestamp = getUnixTimestampTomorrowDay(i);
      timestamps.push(timestamp);
    }
    return timestamps;
}

async function getDateOfNextNights() {
    const timestamps = [];
    for (let i = 0; i < 6; i++) {
      const timestamp = getUnixTimestampTomorrowNight(i);
      timestamps.push(timestamp);
    }
    return timestamps;
}

function setDataToNextFiveDays(day, night){
    fiveDayWeather.querySelectorAll(".dayContainer").forEach((element,index)  =>{
        const temperatureContainer = element.firstElementChild;
        temperatureContainer.firstElementChild.textContent = parseInt(day[index].main.temp) + getUnits().tempUnit;
        temperatureContainer.lastElementChild.textContent = parseInt(night[index].main.temp) + getUnits().tempUnit;
        
        const unixInMiliseconds = day[index].dt * 1000;
        const date = new Date(unixInMiliseconds);
        const dayOfWeek = date.getDay();
        const dayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

        element.lastElementChild.textContent = dayNames[dayOfWeek];
    })
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
    }
    if (visibility < 1000){
        return visibility + " ";
    }
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

function findTown(){

    if (userInput.value === "" || userInput.value.match(/^ *$/) !== null){
        userInput.value = "";
        userInput.placeholder = "Value can't be empty.";
        return;
    }

    cityName = userInput.value;
    userInput.value = "";
    getWeatherData();

}