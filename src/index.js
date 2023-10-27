//Application Logic

class WeatherApi {
    constructor() {
        this.data = null;
        this.search = async function (place) {
            const response = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=d3effd02421b4d96a9d100840231309&q=${place}&aqi=no`
            )
            const parsedData = await response.json();
            this.data = parsedData;
            // console.log(parsedData.current.condition);
        }
    }
}

const img = new Image();
const weatherData = new WeatherApi();
weatherData.search("brno");
async function perque() {
    await weatherData.search("brno");
    console.log('https:' + weatherData.data.current.condition.icon)
    img.src = 'https:' + weatherData.data.current.condition.icon;
}

perque()
// img.src = weatherData.data.current.condition;
document.body.appendChild(img);