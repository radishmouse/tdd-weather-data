
// Implement the following functions to fulfill the tests!
function getLocationName(city) {
    return city.name;
};
function getLocationCountry(global) {
    return global.sys.country;
};
function getLocationLatitude(latit) {
    return latit.coord.lat;
};
function getLocationLongitude(long) {
    return long.coord.lon;
};
function getDescription(sky) {
    return sky.weather[0].description
};
function getWindSpeed(air) {
    return air.wind.speed
};
function getSunrise(rise) {
    return rise.sys.sunrise
};


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