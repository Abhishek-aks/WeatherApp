
let api_key = "45f3736a1c5cd88f73edc4847b049efc";

let city_input = document.getElementById("searchbox");
let add_btn = document.getElementById("add-button");

add_btn.addEventListener("click", () => {
    let city_name = city_input.value.trim();
    getData(city_name);
    city_input.value = "";
})
async function getData(city_name) {
    const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;
    const response = await fetch(base_url);
    const data = await response.json();
    add_data(data);
    console.log(data);
    weather_type = data.weather[0].main;
}

function add_data(data) {
    let div = document.createElement("div");

    div.id = "cards";
    let condition = data.weather.main;
    let weatherImg;
    if (data.weather[0].main == "Clouds") {
        weatherImg = "images/Moon cloud mid rain.png";
    }
    if (data.weather[0].main == "Clear") {
        weatherImg = "images/Sunnying.png";
    }
    if (data.weather[0].main == "Haze") {
        weatherImg = "images/Moon cloud fast wind.png";
    }
    if (data.weather[0].main == "Rain") {
        weatherImg = "images/Sun cloud angled rain";
    }
    if (data.weather[0].main == "Drizzle") {
        weatherImg = "images/Tornado.png";
    }
    if (data.weather[0].main == "Mist") {
        weatherImg = "images/Moon cloud fast wind.png";
    }
    let temp = Math.floor(data.main.temp);
    div.innerHTML = `<div id="details">
    <p id="temp">${temp}&deg C</p>
    <p id="wind">H:${data.main.humidity}&deg  L:${data.wind.speed}&deg</p>
    <p id="city-country">${data.name},${data.sys.country}</p>
</div>

<div id="condition">
<img src="${weatherImg}" id="weather-img" alt="pic">
<p id="weather-type">${data.weather[0].main}</p>
</div>`
    let card = document.getElementById("Cards-container");
    card.appendChild(div);
}