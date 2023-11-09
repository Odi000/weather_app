import './styles.css';
import magnify from './images/magnify.svg';
import calendar from './images/calendar.svg'
import {
    WeatherApi,
    UnitScale,
    HourlyForecast,
    ExtractWeatherData,
} from "./app_logic.js"

const btn = document.querySelector('button>img');
btn.src = magnify;

const headerIcon = document.querySelector('.calendar>img');
headerIcon.src = calendar;

function DOMController() {
    const weatherAPI = new WeatherApi();
    const unitScale = new UnitScale();
    const searchBar = document.querySelector('input');
    const searchBtn = document.querySelector('button');

    //Current-State Section
    const locationName = document.querySelector('.location-name');
    const currentCondition = document.querySelector('.condition');
    const currentTemp = document.querySelector('.current-temp');
    const currentHighest = document.querySelector('.highest');
    const currentLowest = document.querySelector('.lowest');

    searchBar.onkeydown = function (e) {
        if (e.keyCode === 13) requestData(e.target.value);
    }
    searchBtn.onclick = () => {
        requestData(searchBar.value);
    };

    async function requestData(value) {
        await weatherAPI.search(value);
        console.log(weatherAPI)
        if (weatherAPI.data.error) {
            return console.log(weatherAPI.data.error.message);
        }

        //Current-State Section Info to DOM
        const neededData = new ExtractWeatherData(weatherAPI.data);
        // unitScale.setChoice('f');

        locationName.textContent = neededData.locationName;
        currentCondition.textContent = neededData.condition;
        if (unitScale.getChoice() === 'c') {
            currentTemp.textContent = neededData.tempC + '°';
            currentHighest.textContent = 'H: ' + neededData.maxTempC + '°';
            currentLowest.textContent = 'L: ' + neededData.minTempC + '°';
        } else {
            currentTemp.textContent = neededData.tempF + '°';
            currentHighest.textContent = 'H: ' + neededData.maxTempF + '°';
            currentLowest.textContent = 'L: ' + neededData.minTempF + '°';
        }

        //Hourly Forecast Info to DOM
        const hourlyForecast = new HourlyForecast(weatherAPI.data);
        const nextDayHourlyForecast = new HourlyForecast(weatherAPI.data, 1);
        const localTime = new Date(weatherAPI.data.location.localtime)
        const hourNow = localTime.getHours();
        const upcomingHours = hourlyForecast.data.filter(el => hourlyForecast.data.indexOf(el) >= hourNow);

        while (upcomingHours.length > 12) {
            upcomingHours.pop();
        }

        if (upcomingHours.length < 12) {
            let missingHours = 12 - upcomingHours.length;
            for (let i = 0; i < missingHours; i++) {
                upcomingHours.push(nextDayHourlyForecast.data[i]);
            }
        }

        console.log(upcomingHours)
    }
}

DOMController();