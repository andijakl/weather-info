// Sample application to demonstrate async/await
// with a simple HTTP request
// based on the OpenWeather API
// https://openweathermap.org/current

// Async function to get weather data from OpenWeather API
// based on the given latitude and longitude
async function getWeather(lat, lon) {
    // Replace with your OpenWeather API key
    const apiKey = 'xxx';
    // URL to the OpenWeather API
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        // Fetch data from the OpenWeather API
        // and wait for the response (this does not yet include the JSON data)
        const response = await fetch(url);
        // Fetch and return the JSON response
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Code starts here
// Log a message before and after the request to check the order of execution
console.log("before request");
// Call the async function to get the weather data
const data = await getWeather(48.2082, 16.3719);
console.log(data);
console.log("after request");
