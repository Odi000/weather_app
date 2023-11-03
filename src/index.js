import './styles.css';
import magnify from './images/magnify.svg';
import {
    WeatherApi,
    UnitScale,
    HourlyForecast,
    ExtractWeatherData,
} from "./app_logic.js"

const btn = document.querySelector('button>img');
btn.src = magnify;
console.log()