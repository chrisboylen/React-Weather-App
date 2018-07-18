import mockData from './mockData';

export const currentWeatherCleaned = (data) => {
  const currentWeatherCleaned = {
    city: data.current_observation.display_location.city,
    condition: data.current_observation.weather,
    day: data.current_observation.forecast.simpleforecast.forecast.forecastday[0].weekday,
    temp: data.current_observation.temp_f,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.simpleforecast.forecastday.fcttext
  }
  return currentWeatherCleaned;
}