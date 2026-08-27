export const toWeatherModel = (data) => ({
  id: data.id,
  name: data.name,
  temp: data.main.temp,
  status: data.weather[0].description,
  moisture: data.main.humidity,
})
