//Application Logic

//Data fetching Object Constructor
class WeatherApi {
    constructor() {
        this.data = null;
        this.search = async function (place) {
            const response = await fetch(
                `http://api.weatherapi.com/v1/forecast.json?key=d3effd02421b4d96a9d100840231309&q=${place}&days=3&aqi=no&alerts=no`
            )
            const parsedData = await response.json();
            this.data = parsedData;
            console.log(parsedData)
        }
    }
}

// Unit scale Constructor (between 'c' and 'f')
class UnitScale {
    constructor(choice = "c") {
        let unit = choice;
        this.getChoice = function () {
            return unit;
        }
        this.setChoice = function (choice) {
            unit = choice;
        }
    }
}

class HourlyForecast {
    constructor(obj) {
        this.data = obj.forecast.forecastday[0].hour;
    }
}

// Extracts only needed data from weather api
class ExtractWeatherData {
    constructor(obj, day = 0) {
        if(!day){
            this.tempC = obj.current.temp_c;
            this.tempF = obj.current.temp_f;
            this.localTime = obj.location.localtime.split(' ')[1].split(':')[0];
        }
        this.locationName = obj.location.name;
        this.condition = day ? obj.forecast.forecastday[day].day.condition.text : obj.current.condition.text;
        this.conditionIcon = day ? "https:" + obj.forecast.forecastday[day].day.condition.icon : "https:" + obj.current.condition.icon;
        this.maxTempC = obj.forecast.forecastday[day].day.maxtemp_c;
        this.maxTempF = obj.forecast.forecastday[day].day.maxtemp_f;
        this.minTempC = obj.forecast.forecastday[day].day.mintemp_c;
        this.minTempF = obj.forecast.forecastday[day].day.mintemp_f;
    }
}

export {
    WeatherApi,
    UnitScale,
    HourlyForecast,
    ExtractWeatherData,
}

// Testing
const weatherObj = new WeatherApi();
const unitScale = new UnitScale();

async function run() {
    await weatherObj.search("brno");
    const today = new ExtractWeatherData(weatherObj.data);
    const tomorrow = new ExtractWeatherData(weatherObj.data, 1);
    const afterTomorrow = new ExtractWeatherData(weatherObj.data, 2);
    const hourlyData = new HourlyForecast(weatherObj.data);
    console.table(today);
    console.table(tomorrow);
    console.table(afterTomorrow);
}
run();