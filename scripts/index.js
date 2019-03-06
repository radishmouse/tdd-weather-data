
// Implement the following functions to fulfill the tests!
function getLocationName() {}
function getLocationCountry() {}
function getLocationLatitude() {}
function getLocationLongitude() {}
function getDescription() {}
function getWindSpeed() {}

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