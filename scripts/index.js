
// Implement the following functions to fulfill the tests!
function getLocationName(weather) {
   return weather.name
}
function getLocationCountry(weather) {
    return weather.sys.country
}
function getLocationLatitude(weather) {
    return weather.coord.lat;
}
function getLocationLongitude(weather) {
    return weather.coord.lon;
}
function getDescription(weath) {
    return weath.weather[0].description;
}
function getWindSpeed(weather) {
    return weather.wind.speed;
}
function getSunrise(weather) {
    return weather.sys.sunrise;
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