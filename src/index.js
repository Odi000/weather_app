//Application Logic


//Notes
/*
variabla te nevojshme:
- temp_C
- feels like
- percipitation
- parashikimi cdo per 12h e ardhshme
- convertimi nga Celcius ne farenheight
- chance of rain
- parashikimi i 3 ditve te ardhshme
*/

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
            // console.log(parsedData)
        }
    }
}

// Unit scale Constructor (between 'c' and 'f')
class unitScale {
    constructor(choice = "c") {
        let unit = choice;
        this.get = function () {
            return unit;
        }
        this.set = function (choice) {
            unit = choice;
        }
    }
}

class HourlyForecast {
    constructor(obj) {
        this.data = obj.forecast.forecastday[0].hour;
    }
}

class CurrentWeather {
    constructor(obj) {
        this.locationName = obj.location.name;
        this.tempC = obj.current.temp_c;
        this.tempF = obj.current.temp_f;
        this.condition = obj.current.condition.text;
        this.conditionIcon = "https:" + obj.current.condition.icon;
        this.localTime = obj.location.localtime.split(' ')[1].split(':')[0];
        this.maxTempC = obj.forecast.forecastday[0].day.maxtemp_c;
        this.maxTempF = obj.forecast.forecastday[0].day.maxtemp_f;
        this.minTempC = obj.forecast.forecastday[0].day.mintemp_c;
        this.minTempF = obj.forecast.forecastday[0].day.mintemp_f;
    }
}


const weatherObj = new WeatherApi();

async function run() {
    await weatherObj.search("brno");
    const currentDay = new CurrentWeather(weatherObj.data);
    const hourlyData = new HourlyForecast(weatherObj.data);
    console.table(hourlyData.data.map(el => el.temp_c))
}
run();