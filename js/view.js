import { ICON_URL } from "./script.js";

export const WEATHER_UI = {
  SEARCH_FIELD: document.querySelector('.search__input'),
  SEARCH: document.querySelector('.search'),
  CITY_NAMES: document.querySelectorAll('.screen__city'),
  CITY_TEMPERATURE: document.querySelector('.screen__temperature-number'),
  WEATHER_ICON: document.querySelector('.screen__now-icon')
}
export function showCityWeatherData(city, cityData) {
  WEATHER_UI.CITY_NAMES.forEach(element => {
    element.textContent = city;
  });
  WEATHER_UI.CITY_TEMPERATURE.textContent = Math.round(cityData.main.temp);
  WEATHER_UI.WEATHER_ICON.src = `${ICON_URL}${cityData.weather[0].icon}.png`;
}

export function clearField(field) {
  field.value = "";
}