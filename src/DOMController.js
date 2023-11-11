import magnify from './images/magnify.svg';
import calendar from './images/calendar.svg'
import {
    WeatherApi,
    UnitScale,
    HourlyForecast,
    ExtractWeatherData,
} from "./app_logic.js"


function DOMController() {
    const weatherAPI = new WeatherApi();
    const unitScale = new UnitScale();
    const searchBar = document.querySelector('input');
    const searchBtn = document.querySelector('button');
    const btnIcon = document.querySelector('button>img');
    const headerIcon = document.querySelector('.calendar>img');
    
    btnIcon.src = magnify;
    headerIcon.src = calendar;

    // unitScale.setChoice('f');
    
    //1st request just to start the App
    requestData('Prague');

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

        getCurrentWeatherData();
        getHourlyForecast();
        getDailyForecast();


        //Current-State Section Info to DOM
        function getCurrentWeatherData() {
            const locationName = document.querySelector('.location-name');
            const currentCondition = document.querySelector('.condition');
            const currentTemp = document.querySelector('.current-temp');
            const currentHighest = document.querySelector('.highest');
            const currentLowest = document.querySelector('.lowest');        
            const neededData = new ExtractWeatherData(weatherAPI.data);

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
        }

        //Hourly Forecast Info to DOM
        function getHourlyForecast() {
            const hourlyForecastDiv = document.querySelector('.hourly-forecast');
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

            hourlyForecastDiv.innerHTML = '';

            upcomingHours.forEach((el) => {
                displayHourInfo(el)
            })

            function displayHourInfo(data) {
                const containerDiv = document.createElement('div');
                const hour = document.createElement('p');
                const iconDiv = document.createElement('div');
                const icon = document.createElement('img');
                const temp = document.createElement('p');

                containerDiv.classList.add('hour');
                iconDiv.classList.add('icon');

                if (new Date(data.time).getHours() === hourNow) hour.textContent = "Now";
                else hour.textContent = new Date(data.time).getHours();

                if (unitScale.getChoice() == 'c') temp.textContent = Math.round(data.temp_c) + '°';
                else temp.textContent = Math.round(data.temp_f) + '°';

                icon.src = 'https:' + data.condition.icon;
                iconDiv.appendChild(icon);

                containerDiv.appendChild(hour)
                containerDiv.appendChild(iconDiv)
                containerDiv.appendChild(temp);

                hourlyForecastDiv.appendChild(containerDiv);
            }

        }
        
        //3 Day forecast in DOM
        function getDailyForecast() {
            const forecastArr = weatherAPI.data.forecast.forecastday;
            const daysContainer = document.querySelector('.days');

            daysContainer.innerHTML = '';

            for (let i = 0; i < 3; i++) {
                const dayContainer = document.createElement('div');
                const h1 = document.createElement('h1');
                const iconContainer = document.createElement('div');
                const icon = new Image();
                const minTemp = document.createElement('h1');
                const gradientContainer = document.createElement('div');
                const gradient = document.createElement('div');
                const maxTemp = document.createElement('h1');

                dayContainer.classList.add('day');
                iconContainer.classList.add('icon');
                minTemp.classList.add('min');
                gradientContainer.classList.add('gradient');
                maxTemp.classList.add('max');

                console.log(forecastArr[i]);

                if (i === 0) h1.textContent = 'Today';
                else h1.textContent = findWeekDay(new Date(forecastArr[i].date).getDay());

                icon.src = 'https:' + forecastArr[i].day.condition.icon;
                if (unitScale.getChoice() == 'c') {
                    minTemp.textContent = Math.round(forecastArr[i].day.mintemp_c) + '°';
                    maxTemp.textContent = Math.round(forecastArr[i].day.maxtemp_c) + '°';
                } else {
                    minTemp.textContent = Math.round(forecastArr[i].day.mintemp_f) + '°';
                    maxTemp.textContent = Math.round(forecastArr[i].day.maxtemp_f) + '°';
                }

                iconContainer.appendChild(icon);
                gradientContainer.appendChild(gradient);

                dayContainer.appendChild(h1);
                dayContainer.appendChild(iconContainer);
                dayContainer.appendChild(minTemp);
                dayContainer.appendChild(gradientContainer);
                dayContainer.appendChild(maxTemp);

                daysContainer.appendChild(dayContainer);
            }

            function findWeekDay(nr) {
                let answer = '';
                switch (nr) {
                    case 0:
                        answer = 'Sun';
                        break;
                    case 1:
                        answer = 'Mon';
                        break;
                    case 2:
                        answer = 'Tue';
                        break;
                    case 3:
                        answer = 'Wed';
                        break;
                    case 4:
                        answer = 'Thu';
                        break;
                    case 5:
                        answer = 'Fri';
                        break;
                    case 6:
                        answer = 'Sat';
                } return answer;
            }
        }
    }
}

export default DOMController;