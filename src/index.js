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
console.log()