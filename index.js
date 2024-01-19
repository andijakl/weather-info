async function getWeather(lat, lon) {
    // https://openweathermap.org/current
    const apiKey = ''; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

console.log("before request");
const data = await getWeather(48.2082, 16.3719);
console.log(data);

console.log("after request");
