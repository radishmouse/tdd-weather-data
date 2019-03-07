const weatherDiv = document.querySelector('[data-weather]');
console.log(weatherDiv);
// Append location name to the weather div
function getLocationName(object) {
    const location = object.name;
    const newLocation = document.createElement('h2');
    newLocation.textContent = `Location: ${location}`;

    weatherDiv.append(newLocation);

}
getLocationName(atlWeather);

function getLocationCountry(object) {
    return object.sys.country;
}
function getLocationLatitude(object) {
    return object.coord.lat;
}
function getLocationLongitude(object) {
    return object.coord.lon;
}
function getDescription(object) {
    return object.weather[0].description;
}
function getWindSpeed(object) {
    return object.wind.speed;
}
function getSunrise(object) {
    return object.sys.sunrise;
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