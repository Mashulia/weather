import { toggleTab } from './tab.js';

const WEATHER_UI = {
  SEARCH_FIELD: document.querySelector('.search__input'),
  SEARCH: document.querySelector('.search'),
  CITY_NAMES: document.querySelectorAll('.screen__city'),
  CITY_TEMPERATURE: document.querySelector('.screen__temperature-number'),
  WEATHER_ICON: document.querySelector('.screen__now-icon')
}

const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const ICON_URL = 'http://openweathermap.org/img/wn/'
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
let cityName = 'Aktobe';
let cityData;

function getCityWeatherData() {
  if (WEATHER_UI.SEARCH_FIELD.value) {
    cityName = WEATHER_UI.SEARCH_FIELD.value;
    WEATHER_UI.SEARCH_FIELD.value = "";
    fetch(`${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        return response.json();
      })
      .then(result => {
        cityData = result;
        showCityWeatherData()
      })
  }
}

function showCityWeatherData() {
  WEATHER_UI.CITY_NAMES.forEach(element => {
    element.textContent = cityName;
  });
  WEATHER_UI.CITY_TEMPERATURE.textContent = Math.round(cityData.main.temp);
  WEATHER_UI.WEATHER_ICON.src = `${ICON_URL}${cityData.weather[0].icon}.png`;
}

WEATHER_UI.SEARCH.addEventListener("submit", getCityWeatherData)
WEATHER_UI.SEARCH.addEventListener("submit", showCityWeatherData)


toggleTab()
