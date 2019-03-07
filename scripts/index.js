const weatherDiv = document.querySelector('[data-weather]');
console.log(weatherDiv);

// Append location name to the weather div
function addLocationName(object) {
    const location = object.name;
    const newLocation = document.createElement('h2');
    newLocation.textContent = `Location: ${location}`;

    weatherDiv.append(newLocation);

}

addLocationName(atlWeather);

// Add temperature to weather div

function addTemp(object) {
    const temp = object.main.temp;
    const kToFTemp = (temp - 273.15) * (9/5) + 32;
    const newTemp = document.createElement('h2');
    newTemp.textContent = `Temperature: ${Math.round(kToFTemp)} degrees Fahrenheit`;

    weatherDiv.append(newTemp);

    console.log(Math.round(kToFTemp));
}
addTemp(atlWeather); 


// function getLocationCountry(object) {
//     return object.sys.country;
// }
// function getLocationLatitude(object) {
//     return object.coord.lat;
// }
// function getLocationLongitude(object) {
//     return object.coord.lon;
// }
// function getDescription(object) {
//     return object.weather[0].description;
// }
// function getWindSpeed(object) {
//     return object.wind.speed;
// }
// function getSunrise(object) {
//     return object.sys.sunrise;
// }


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