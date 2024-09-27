document.getElementById('getWeather').addEventListener('click', getWeather);

async function getWeather() {
    try {
        const city = document.getElementById('city').value;
        const apiKey = '456a04206539076901dd150ac5393418'; // Replace with your OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Added &units=metric for Celsius

        const response = await fetch(url); // Fixed syntax here
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerText = error.message;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const result = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
    `;

   
    document.getElementById('weatherResult').innerHTML = result;
}
