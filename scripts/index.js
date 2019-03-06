
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