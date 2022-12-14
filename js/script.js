const searchButton = document.querySelector('.btn');
const inputKeyword = document.querySelector('.inputSearch');

searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')

            let city = document.querySelector(".city")
            city.innerHTML = `${response.name}`;
            let condition = document.querySelector(".condition")
            condition.innerHTML = `${response.weather[0].description}`;
            let temp = document.querySelector(".temp")
            temp.innerHTML = `${response.main.temp}`;
            let wind = document.querySelector(".wind")
            wind.innerHTML = `${response.wind.speed}`;
             
        })
    inputKeyword.value = null;

})