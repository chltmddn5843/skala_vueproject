import { ref } from 'vue'
import { toWeatherModel } from '@/models/weather'
import { getCurrentWeather } from '@/services/weatherApi'

export const useWeatherViewModel = () => {
  const weatherList = ref([])
  const searchQuery = ref('Seoul')
  const selectedCityInfo = ref('도시를 검색해 보세요.')
  const favoriteCity = ref(null)
  const isLoading = ref(false)
  const errorMessage = ref('')

  const fetchWeather = async () => {
    const city = searchQuery.value.trim()
    if (!city) {
      errorMessage.value = '도시 이름을 입력해 주세요.'
      return
    }

    isLoading.value = true
    errorMessage.value = ''
    const minimumLoading = new Promise((resolve) => setTimeout(resolve, 2000))
    try {
      const [data] = await Promise.all([getCurrentWeather(city), minimumLoading])
      const weather = toWeatherModel(data)
      weatherList.value = [weather]
      selectedCityInfo.value = `${weather.name} 날씨를 불러왔습니다.`
    } catch {
      await minimumLoading
      weatherList.value = []
      errorMessage.value = '도시를 찾지 못했거나 날씨 정보를 불러오지 못했습니다.'
    } finally {
      isLoading.value = false
    }
  }

  const selectFavorite = (city) => {
    favoriteCity.value = city
  }

  return {
    weatherList,
    searchQuery,
    selectedCityInfo,
    favoriteCity,
    isLoading,
    errorMessage,
    fetchWeather,
    selectFavorite,
  }
}
