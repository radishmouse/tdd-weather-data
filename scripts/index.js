
// Implement the following functions to fulfill the tests!
function getLocationName(obj) {
    return obj.name;
}
function getLocationCountry(obj) {
    return obj.sys.country;
}
function getLocationLatitude(obj) {
    return obj.coord.lat;
}
function getLocationLongitude(obj) {
    return obj.coord.lon;
}
function getDescription(obj) {
    return obj.weather.map(function (each) {
        return each.description;
    });
}
function getWindSpeed(obj) {
    return obj.wind.speed;
}
function getSunrise(obj) {
    return obj.sys.sunrise;
}
function getTemperature(obj) {
    return obj.main.temp;
}


// Please ignore the following
try {
    module.exports = {
        getLocationName,
        getLocationCountry,
        getLocationLatitude,
        getLocationLongitude,
        getDescription,
        getWindSpeed,
        getSunrise
    }
} catch (e) {
    
}

// Using the tdd-weather repo as your starter code, create and append DOM elements that show the following information:
// city name
// temperature
// wind speed

const weatherDiv = document.querySelector('[data-weather]');


const cityName = document.createElement('p');
cityName.textContent = `City: ${getLocationName(atlWeather)}`;
weatherDiv.append(cityName);

const temperature = document.createElement('p');
temperature.textContent = `Temperature: ${getTemperature(atlWeather)}℉`;
weatherDiv.append(temperature);

const windSpeed = document.createElement('p');
windSpeed.textContent = `Windspeed: ${getWindSpeed(atlWeather)}`;
weatherDiv.append(windSpeed);