
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
function getDescription() {}

// getWindSpeed function returns the given city's wind speed
function getWindSpeed(city) {
    return city.wind.speed;
}

// getSunrise function gets the sunrise data of city
function getSunrise(city) {
    return city.sys.sunrise;
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