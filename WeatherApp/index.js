const apiKey = "46f80a02ecae410460d59960ded6e1c6";
const weatherData = document.getElementById("weather-data");
console.log(weatherData)
const cityInputElement = document.getElementById("city-input");
const formElement = document.querySelector("form");
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const cityValue = cityInputElement.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed}m/s`
        ];
        weatherData.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png">`
        weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherData.querySelector(".description").textContent = `${description}°C`;
        weatherData.querySelector(".details").innerHTML = details.map((details) => `<div>${details}</div>`).join("")
    } catch (error) {
        weatherData.querySelector('.icon').innerHTML = "";
        weatherData.querySelector(".temperature").textContent = "";
        weatherData.querySelector(".description").textContent = "An Error Happened please try again later";
        weatherData.querySelector(".details").innerHTML = "";
    }
}