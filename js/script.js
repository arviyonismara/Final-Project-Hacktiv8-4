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
      let result = document.querySelector(".result");

      let city = document.querySelector(".city");
      city.innerHTML = `${response.name}, ${response.sys.country}`;
      let condition = document.querySelector(".condition");
      condition.innerHTML = `${response.weather[0].description}`;
      let temp = document.querySelector(".temp");
      temp.innerHTML = Math.round(`${response.main.temp}`) + "°С";
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
    });
  inputKeyword.value = null;
});
