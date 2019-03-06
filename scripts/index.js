
// Implement the following functions to fulfill the tests!
function getLocationName(location) {
    location = location.name;
    return location
}

function getLocationCountry(nation) {
    nation = nation.sys.country;
    return nation
}

function getLocationLatitude(latitude) {
    latitude = latitude.coord['lat'];
    return latitude
}

function getLocationLongitude(longitude) {
    longitude = longitude.coord['lon'];
    return longitude
}

function getDescription(descrip) {
    descrip = descrip.weather[0].description;
    return descrip
}

function getWindSpeed(windSpeed) {
    windSpeed = windSpeed.wind['speed'];
    return windSpeed
}
function getSunrise(sunUp) {
    sunUp = sunUp.sys.sunrise;
    return sunUp
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