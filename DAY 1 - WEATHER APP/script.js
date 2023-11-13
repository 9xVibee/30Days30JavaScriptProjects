const apiKey = "8169b1c76fd3771a8357c1c602416246";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.querySelector(".search button");
const weather = document.querySelector(".weather");
const searchInput = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  if (data.cod === "404") {
    searchInput.style.color = "red";
    searchInput.value = "City not found!";
    return;
  } else {
    searchInput.style.color = "black";
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main === "Clouds") weatherIcon.src = "/images/clouds.png";
  else if (data.weather[0].main === "Clear")
    weatherIcon.src = "/images/clear.png";
  else if (data.weather[0].main === "Drizzle")
    weatherIcon.src = "/images/drizzle.png";
  else if (data.weather[0].main === "Mist")
    weatherIcon.src = "/images/mist.png";

  weather.style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
