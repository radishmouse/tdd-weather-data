
// Implement the following functions to fulfill the tests!
function getLocationName(object) {
    return object.name;
}
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