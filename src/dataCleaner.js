import mockData from './mockData';

export const currentWeatherCleaned = (data) => {
  const currentWeatherCleaned = {
    city: data.current_observation.display_location.city,
    condition: data.current_observation.weather,
    currentDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
    temp: data.current_observation.temp_f,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext
  }
  return currentWeatherCleaned;
}

export const sevenHourCleaned = (data) => {
  const sevenHourCleaned = [];

  data.hourly_forecast.splice(0, 7).forEach(hour => {
    sevenHourCleaned.push({
      hour: hour.FCTTIME.civil,
      icon: hour.icon_url,
      temp: hour.temp.english
    })
  })
  return sevenHourCleaned;
}

export const tenDayCleaned = (data) => {
  const tenDayCleaned= [];

  data.forecast.simpleforecast.forecastday.forEach(day => {
    tenDayCleaned.push({
      day: day.date.weekday,
      icon: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit
    })
  })
  return tenDayCleaned
}