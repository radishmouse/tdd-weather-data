
// Implement the following functions to fulfill the tests!


//location should be Atlanta
function getLocationName(data) {
    return data.name;
}




//country should be US
function getLocationCountry (data) {
    return data.sys.country;
}




function getLocationLatitude(data) {
    return data.coord.lat;
}

function getLocationLongitude(data) {
    return data.coord.lon;
}
function getDescription(data) {
    // return data.weather[0];
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