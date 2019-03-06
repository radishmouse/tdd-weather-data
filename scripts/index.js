
// Implement the following functions to fulfill the tests!
function getLocationName() {}
function getLocationCountry() {}
function getLocationLatitude() {}
function getLocationLongitude() {}
// getDescription function returns the city's current weather state
function getDescription(city) {
    return city.weather[0].description;
}
function getWindSpeed() {}
function getSunrise() {}


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