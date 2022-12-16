const searchButton = document.querySelector(".btn");
const inputKeyword = document.querySelector(".inputSearch");

searchButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputKeyword.value +
      "&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric"
  )
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((response) => {
      let city = document.querySelector(".city");
      city.innerHTML = `${response.name}, ${response.sys.country}`;
      let condition = document.querySelector(".condition");
      condition.innerHTML = `${response.weather[0].description}`;
      let temp = document.querySelector(".temp");
      temp.innerHTML = Math.round(`${response.main.temp}`) + " °С";
      let tempmin = document.querySelector(".tempmin");
      tempmin.innerHTML = `${response.main.temp_min}` + "°С";
      let tempmax = document.querySelector(".tempmax");
      tempmax.innerHTML = `${response.main.temp_max}` + "°С";
      let humidity = document.querySelector(".humidity");
      humidity.innerHTML = `${response.main.humidity}` + "%";
      let wind = document.querySelector(".wind");
      wind.innerHTML = `${response.wind.speed}` + " m/s";
      let cloud = document.querySelector(".cloud");
      cloud.innerHTML = `${response.clouds.all}` + "%";

      let image = document.querySelector(".image");

      if (`${response.weather[0].description}` == "clear sky") {
        document.getElementById("gambarBerganti").src = "#"
        document.getElementById("gambarBerganti").src = "/image/clear.png";
      } else if (
        `${response.weather[0].description}` == "mist" &&
        "Smoke" &&
        "Haze" &&
        "sand / dust whirls" &&
        "fog" &&
        "sand" &&
        "dust"
        ) {
        document.getElementById("gambarBerganti").src = "#"
        document.getElementById("gambarBerganti").src = "/image/wind.png";
      } else if (
        `${response.weather[0].description}` == "few clouds" &&
        "scattered clouds"
        ) {
        document.getElementById("gambarBerganti").src = "#"
        document.getElementById("gambarBerganti").src = "/image/sun-cloud.png";
      } else if (
        `${response.weather[0].description}` == "overcast clouds" &&
        "broken clouds"
        ) {
        document.getElementById("gambarBerganti").src = "#"
        document.getElementById("gambarBerganti").src = "/image/cloud.png";
      } else if (
        `${response.weather[0].description}` == "light rain" &&
        "moderate rain" &&
        "heavy intensity rain" &&
        "very heavy rain" &&
        "extreme rain" &&
        "light intensity shower rain" &&
        "shower rain" &&
        "heavy intensity shower rain" &&
        "ragged shower rain"
        ) {
        document.getElementById("gambarBerganti").src = "#"
        document.getElementById("gambarBerganti").src = "/image/rain.png";
      } else if (
        `${response.weather[0].description}` ==
        "thunderstorm with light rain" &&
        "thunderstorm with rain" &&
        "thunderstorm with heavy rain" &&
        "thunderstorm with light drizzle" &&
        "thunderstorm with drizzle" &&
        "thunderstorm with heavy drizzle"
        ) {
        document.getElementById("gambarBerganti").src = "#"
        document.getElementById("gambarBerganti").src =
        "/image/stormandrain.png";
      } else if (
        `${response.weather[0].description}` == "thunderstorm" &&
        "heavy thunderstorm" &&
        "ragged thunderstorm"
        ) {
        document.getElementById("gambarBerganti").src = "#"
        document.getElementById("gambarBerganti").src =
          "/image/thunderstorm.png";
      }
    });
  inputKeyword.value = null;
});
