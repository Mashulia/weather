import { toggleTab } from './tab.js';
import { WEATHER_UI, showCityWeatherData, clearField } from './view.js';

const SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather';
export const ICON_URL = 'https://openweathermap.org/img/wn/'
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
let cityName = 'Aktobe';

function getAndShowCityWeatherData(field, url, key) {
  if (field.value) {
    cityName = field.value;
    clearField(field);
    let urlString = `${url}?q=${cityName}&appid=${key}&units=metric`;
    fetch(urlString)
      .then((response) => {
        return response.json();
      })
      .then(result => {
        showCityWeatherData(cityName, result)
      })
      .catch(alert)
  }
}

WEATHER_UI.SEARCH.addEventListener("submit", (evt) => {
  evt.preventDefault();
  getAndShowCityWeatherData(WEATHER_UI.SEARCH_FIELD, SERVER_URL, API_KEY)
})

toggleTab()
