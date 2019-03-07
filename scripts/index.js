const weatherDiv = document.querySelector('[data-weather]');
console.log(weatherDiv);

// Append location name to the weather div
function addLocationName(object) {
    const location = object.name;

    return `Location: ${location}`;

}


// Add temperature to weather div

function addTemp(object) {
    const temp = object.main.temp;
    const kToFTemp = (temp - 273.15) * (9/5) + 32;

    return `Temperature: ${Math.round(kToFTemp)}`;
}

// Add wind speed to weather div

function addWind(object) {
    const wind = object.wind.speed;
    const mphWind = wind * 2.237;

    return `Wind speed(mph): ${Math.round(mphWind)}`;
}

// Add icon to weather div
function addIcon(object) {
    // get icon code from object
    const iconCode = object.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    const newIcon = document.createElement('img');
    newIcon.setAttribute('src', iconUrl);
    newIcon.classList.add('conditions');

    const conditionsText = document.createElement('h2');
    conditionsText.classList.add('conditions');
    conditionsText.textContent = 'Current conditions: '

    weatherDiv.append(conditionsText);
    weatherDiv.append(newIcon);

}
addIcon(atlWeather);

function addToWeather(data) {
    const newData = document.createElement('h2');
    newData.textContent = data;

    weatherDiv.append(newData);
}

addToWeather(addLocationName(atlWeather));
addToWeather(addTemp(atlWeather));
addToWeather(addWind(atlWeather));



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