import { recommendActivity } from './weather'

const cities = [
  { id: 'city_01', name: '인천', fullName: '인천광역시', temp: 19, feelsLike: 18, status: '흐림', moisture: 80, cloudiness: 75, wind: 2.5 },
  { id: 'city_02', name: '부산', fullName: '부산광역시', temp: 25, feelsLike: 27, status: '맑음', moisture: 60, cloudiness: 10, wind: 3.2 },
  { id: 'city_03', name: '대전', fullName: '대전광역시', temp: 24, feelsLike: 26, status: '비', moisture: 90, cloudiness: 100, wind: 4.1 },
  { id: 'city_04', name: '광주', fullName: '광주광역시', temp: 27, feelsLike: 29, status: '맑음', moisture: 50, cloudiness: 15, wind: 2.8 },
  { id: 'city_05', name: '대구', fullName: '대구광역시', temp: 23, feelsLike: 24, status: '흐림', moisture: 70, cloudiness: 70, wind: 3.6 },
]

export const mockWeatherList = cities.map((city) => ({
  ...city,
  recommendation: recommendActivity(city),
}))
