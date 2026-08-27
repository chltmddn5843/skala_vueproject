import axios from 'axios'

export const getCurrentWeather = async (city) => {
  const { data } = await axios.get('/api/weather', { params: { city } })
  return data
}
