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

export const sevenHourCleaned = (data, index) => {
 
  const sevenHourArray = [];
  data.hourly_forecast.splice(0, 7).forEach(time => {

    sevenHourArray.push({
      hour: time.FCTTIME.civil,
      temp: time.temp.english,
      condition: time.condition,
      conditionIcon: time.icon_url
    });
  });
  return sevenHourArray;
}

export const tenDayCleaned = (data, index) => {
 
  const tenDayArray = [];
  data.forecast.simpleforecast.forecastday.splice(0, 10).forEach(day => {

    tenDayArray.push({
      day: day.weekday,
      high: day.high,
      low: day.low,
      humidity: day.avehumidity,
      conditionIcon: day.icon_url
    });
  });
  return tenDayArray;
}