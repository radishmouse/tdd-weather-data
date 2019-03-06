
// Implement the following functions to fulfill the tests!
function getLocationName(data) {
    return data.name;
}
function getLocationCountry(data) {
    return data.sys.country;
}
function getLocationLatitude(data) {
    return data.coord.lat;
}
function getLocationLongitude(data) {
    return data.coord.lon;
}
function getDescription(data) {
    return data.weather[0].description;
}
function getWindSpeed(data) {
    return data.wind.speed;
}
function getSunrise(data) {
    return data.sys.sunrise;
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