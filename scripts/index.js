
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