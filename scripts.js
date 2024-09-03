const API_KEY = "REEMPLAZA CON TU API KEY DE OPENWEATHERMAP";
const UNSPLASH_ACCESS_KEY = "REEMPLAZA CON TU API KEY  UNSPLASH";
let cityInput = document.getElementById("cityInput");
let searchButton = document.getElementById("searchButton");
let weatherCard = document.querySelector(".weather-card");

// Función para obtener los datos del clima según la ubicación del usuario
async function getWeatherDataByGeoLocation() {
    try {
        // Obtener la ubicación del usuario usando la geolocalización del navegador
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                let { latitude, longitude } = position.coords;
                let WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
                let weatherResponse = await fetch(WEATHER_API_URL);
                let weatherData = await weatherResponse.json();
                updateWeatherCard(weatherData);
                console.log(weatherData);
            });
        } else {
            throw new Error("La geolocalización no está disponible en este navegador.");
        }
    } catch (error) {
        console.error("Error al obtener los datos del clima: " + error.message);
    }
}

// Función para obtener los datos del clima según la ubicación ingresada por el usuario
async function getWeatherDataByCity(cityName) {
    try {
        let GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
        let response = await fetch(GEOCODING_API_URL);
        let data = await response.json();

        // Verificar si se encontraron resultados de la búsqueda
        if (data.length > 0) {
            let { lat, lon } = data[0];
            let WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            let weatherResponse = await fetch(WEATHER_API_URL);
            let weatherData = await weatherResponse.json();
            updateWeatherCard(weatherData);
            return weatherData;
        } else {
            throw new Error("No se encontraron resultados para la ciudad ingresada.");
        }
    } catch (error) {
        throw new Error("Error al obtener los datos del clima: " + error.message);
    }
}

// Función para actualizar la tarjeta del tiempo con los datos del clima
function updateWeatherCard(data) {
    let cityName = data.name;
    let temperature = data.main.temp.toFixed(1);
    let feelsLike = data.main.feels_like;
    let humidity = data.main.humidity;
    let weatherDescription = data.weather[0].description;
    let weatherIcon = data.weather[0].icon;

    // Determinar si es de día o de noche
    let currentTime = data.dt; // Hora de cálculo de datos 
    let sunrise = data.sys.sunrise; // Hora de salida del sol
    let sunset = data.sys.sunset; // Hora de puesta del sol 
    let isDay = currentTime > sunrise && currentTime < sunset;
    let timeOfDay = isDay ? "day" : "night";

    // Generar la consulta de búsqueda
    var searchQuery = timeOfDay + ' ' + weatherDescription + ' weather';


    // Actualizar el contenido de la tarjeta del tiempo
    weatherCard.innerHTML = `
        <div class="weather-info">
            <div class="weather-icon">
                <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
            </div>
            <div class="weather-details">
                <h2>${cityName}</h2>
                <h3>${weatherDescription}</h3>
            </div>
        </div>
        <div class="temperature">
            <h1>${temperature}°C</h1>
            <h4>Sensación térmica: ${feelsLike}°C</h4>
        </div>
        <div class="humidity">
            <h4>Humedad: ${humidity}%</h4>
        </div>
    `;
    searchImage(searchQuery);
}

// Función para buscar una imagen relacionada con la descripción del clima en Unsplash
function searchImage(searchQuery) {
    console.log("Busqueda en Unsplash :", searchQuery);
    let url = 'https://api.unsplash.com/search/photos?query=' + searchQuery + UNSPLASH_ACCESS_KEY;

    fetch(url)
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(data => {
            if (data.results.length > 0) {
                let randomIndex = Math.floor(Math.random() * data.results.length);
                let imageUrl = data.results[randomIndex].urls.raw;
                loadBackgroundImage(imageUrl);
            } else {
                console.log("No se encontraron imágenes para la búsqueda.");
            }
        })
        .catch(error => console.log(error));
}

// Función para cargar la imagen de fondo en el cuerpo del documento
function loadBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = "url(" + imageUrl + ")";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
}

// Definir la función para abrir la imagen en una nueva pestaña
function openImageInNewTab() {
    let imageUrl = document.body.style.backgroundImage.replace('url("', '').replace('")', ''); // Obtener la URL de la imagen del estilo de fondo del cuerpo
    window.open(imageUrl, '_blank'); // Abrir la imagen en una nueva pestaña o ventana del navegador
}

function setupEventHandlers() {
    // Evento para abrir la imagen de fondo en una nueva pestaña
    document.getElementById('cameraIcon').addEventListener('click', openImageInNewTab);

    // Evento para buscar el clima basado en la ciudad ingresada
    searchButton.addEventListener("click", async () => {
        let cityName = cityInput.value.trim();
        if (!cityName) {
            return console.error("Ingrese un nombre de ciudad válido.");
        }
        try {
            let weatherData = await getWeatherDataByCity(cityName);
            updateWeatherCard(weatherData);
        } catch (error) {
            console.error(error.message);
        }
    });
}

// Asignar los eventos cuando la página carga
window.addEventListener('load', () => {
    setupEventHandlers();
    getWeatherDataByGeoLocation();
});
