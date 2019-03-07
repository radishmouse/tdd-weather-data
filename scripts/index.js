
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

const url = 'http://openweathermap.org/img/w/11d.png'

function getIcon(obj) {
    return obj.weather[0].icon;
}

function weatherPic (get) {
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', `http://openweathermap.org/img/w/${get}.png`);
    return imgTag;
}

weatherDiv.append(weatherPic(getIcon(atlWeather)))

const cityName = document.createElement('p');
cityName.textContent = `City: ${getLocationName(atlWeather)}`;
weatherDiv.append(cityName);

const temperature = document.createElement('p');
temperature.textContent = `Temperature: ${getTemperature(atlWeather)}℉`;
weatherDiv.append(temperature);

const windSpeed = document.createElement('p');
windSpeed.textContent = `Windspeed: ${getWindSpeed(atlWeather)}`;
weatherDiv.append(windSpeed);


function getSunrise (obj) {
    return obj.sys.sunrise;
}
function getSunset (obj) {
    return obj.sys.sunset;
}

function convertTime(unix_timestamp) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime
}


const sunrise = document.createElement('p');
sunrise.textContent = `Sunrise: ${convertTime(getSunrise(atlWeather))}`;
weatherDiv.append(sunrise);

const sunset = document.createElement('p');
sunset.textContent = `Sunset: ${convertTime(getSunset(atlWeather))}`;
weatherDiv.append(sunset);