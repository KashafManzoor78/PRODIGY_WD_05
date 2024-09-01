document.getElementById('fetch-weather').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    fetchWeatherData(location);
});

function fetchWeatherData(location) {
    const apiKey = 'cbf2aafbbfb7b6010f1c1b13548ab993'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => alert('Error fetching weather data. Please try again.'));
}

function displayWeatherData(data) {
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('weather-description').innerText = `Weather: ${description}`;
    document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${windSpeed} m/s`;
}
