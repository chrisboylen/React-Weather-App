import mockData from './mockData';

export const currentWeatherCleaned = (data) => {
  const currentWeatherCleaned = {
    city: data.current_observation.display_location.city,
    condition: data.current_observation.weather,
    day: data.forecast.simpleforecast.forecastday[0].date.weekday,
    temp: data.current_observation.temp_f,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext
  }
  return currentWeatherCleaned;
}