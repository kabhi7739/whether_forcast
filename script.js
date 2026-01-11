async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "099acf91bee5d0b5de27862c80a28044";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let div = document.querySelector("#result");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      
      div.innerHTML = `<p>City not found or API error.</p>`;
      return; 
    }

    const data = await response.json();

    div.innerHTML = `<h1>City: ${city} <br> Temperature: ${data.main.temp}°C <br> Humidity: ${data.main.humidity}% <br> Feels like: ${data.main.feels_like}°C</h1>`;
  } catch (error) {
    
    div.innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
  }
}
