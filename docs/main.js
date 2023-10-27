/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsTUFBTTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vQXBwbGljYXRpb24gTG9naWNcblxuY2xhc3MgV2VhdGhlckFwaSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gYXN5bmMgZnVuY3Rpb24gKHBsYWNlKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9ZDNlZmZkMDI0MjFiNGQ5NmE5ZDEwMDg0MDIzMTMwOSZxPSR7cGxhY2V9JmFxaT1ub2BcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBwYXJzZWREYXRhO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGFyc2VkRGF0YS5jdXJyZW50LmNvbmRpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgd2VhdGhlckRhdGEgPSBuZXcgV2VhdGhlckFwaSgpO1xud2VhdGhlckRhdGEuc2VhcmNoKFwiYnJub1wiKTtcbmFzeW5jIGZ1bmN0aW9uIHBlcnF1ZSgpIHtcbiAgICBhd2FpdCB3ZWF0aGVyRGF0YS5zZWFyY2goXCJicm5vXCIpO1xuICAgIGNvbnNvbGUubG9nKCdodHRwczonICsgd2VhdGhlckRhdGEuZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKVxuICAgIGltZy5zcmMgPSAnaHR0cHM6JyArIHdlYXRoZXJEYXRhLmRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbn1cblxucGVycXVlKClcbi8vIGltZy5zcmMgPSB3ZWF0aGVyRGF0YS5kYXRhLmN1cnJlbnQuY29uZGl0aW9uO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==