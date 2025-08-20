async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "099acf91bee5d0b5de27862c80a28044"; // <-- Apni OpenWeatherMap API key yaha daalo

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
let div=document.querySelector("#result");
  const response = await fetch(url);

  const data = await response.json();
  
    
    div.innerHTML=`<h1> city : ${city}  <br> temperature: ${data.main.temp}°C<br> humidity::${data.main.humidity}% <br> feels-like:${data.main.feels_like}°</h1>`;
    



}