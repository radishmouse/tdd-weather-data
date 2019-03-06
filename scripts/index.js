// worked with Eric M.

// Implement the following functions to fulfill the tests!
function getLocationName(weather) {
  const city = new Map();
  const cityValues = Object.values(weather); // array of city values
  return cityValues[10]; //city name is in index 10
}

function getLocationCountry(weather) {
  console.log(weather);
  return weather.sys.country;
}
function getLocationLatitude(weather) {
  return weather.coord.lat;
}
function getLocationLongitude(weather) {
  return weather.coord.lon;
}
function getDescription(weather) {
  return weather.weather[0].description;
}
function getWindSpeed(weather) {
  return weather.wind["speed"];
}
function getSunrise(weather) {
  return weather.sys["sunrise"];
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
  };
} catch (e) {}
