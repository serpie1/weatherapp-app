const geoUrl = "https://get.geojs.io/v1/ip/geo.json"; // GeoJS API for IP geolocation
const cityElement = document.getElementById('city'); // <p> element for city name
const tempElement = document.getElementById('temp'); // <p> element for temperature

// Fetch geolocation data
fetch(geoUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
    })
    .then(geoData => {
        const cityName = geoData.city; // Get the city name
        const latitude = geoData.latitude; // Get latitude
        const longitude = geoData.longitude; // Get longitude

        // Prepare the weather API URL using the obtained latitude and longitude
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

        // Fetch weather data
        return fetch(weatherUrl)
            .then(weatherResponse => {
                if (!weatherResponse.ok) {
                    throw new Error(`HTTP error! status: ${weatherResponse.status}`);
                }
                return weatherResponse.json(); // Parse the weather JSON response
            })
            .then(weatherData => {
                const temperature = weatherData.current_weather?.temperature; // Using optional chaining

                // Update the DOM with the city name and temperature
                cityElement.textContent = `City: ${cityName}`; // Update the <p> element for city name
                if (temperature !== undefined) {
                    tempElement.textContent = `Temperature: ${temperature}°C`; // Update the <p> element for temperature
                } else {
                    tempElement.textContent = 'Temperature: Data not available'; // Handle case where temperature is not available
                }
            });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Optional: Handle error case in the UI
        cityElement.textContent = 'City: Data not available';
        tempElement.textContent = 'Temperature: Data not available';
    });