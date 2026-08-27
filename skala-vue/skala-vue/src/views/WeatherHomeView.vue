<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import BaseDashboardCard from '../components/BaseDashboardCard.vue'
import SearchBar from '../components/SearchBar.vue'
import WeatherCard from '../components/WeatherCard.vue'

const weatherList = ref([])
const searchQuery = ref('Seoul')
const selectedCityInfo = ref('도시를 검색해 보세요.')
const favoriteCity = ref(null)
const isLoading = ref(false)
const errorMessage = ref('')

const fetchWeather = async () => {
  const city = searchQuery.value.trim()
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

  if (!city || !apiKey) {
    errorMessage.value = apiKey ? '도시 이름을 입력해 주세요.' : '날씨 API 키가 필요합니다.'
    return
  }

  isLoading.value = true
  errorMessage.value = ''
  try {
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { q: city, appid: apiKey, units: 'metric', lang: 'kr' },
    })
    weatherList.value = [{
      id: data.id,
      name: data.name,
      temp: data.main.temp,
      status: data.weather[0].description,
      moisture: data.main.humidity,
    }]
    selectedCityInfo.value = `${data.name} 날씨를 불러왔습니다.`
  } catch {
    weatherList.value = []
    errorMessage.value = '도시를 찾지 못했거나 날씨 정보를 불러오지 못했습니다.'
  } finally {
    isLoading.value = false
  }
}

const handleFavorite = (city) => {
  favoriteCity.value = city
}

onMounted(fetchWeather)
</script>

<template>
  <div class="dashboard-wrapper">
    <BaseDashboardCard>
      <SearchBar
        :current-query="searchQuery"
        @update-query="(val) => (searchQuery = val)"
        @search="fetchWeather"
      />
    </BaseDashboardCard>

    <BaseDashboardCard>
      <h3>현재 날씨</h3>
      <p v-if="isLoading" class="message">날씨를 불러오는 중입니다.</p>
      <p v-else-if="errorMessage" class="message error">{{ errorMessage }}</p>
      <WeatherCard
        v-for="item in weatherList"
        :key="item.id"
        :city-item="item"
        @select-card="(msg) => (selectedCityInfo = msg)"
        @click-detail="(name, status) => (selectedCityInfo = `${name}의 현재 날씨는 ${status}입니다.`)"
        @favorite="handleFavorite"
      />
    </BaseDashboardCard>
    <div class="status-bar">{{ selectedCityInfo }}</div>
    <div v-if="favoriteCity" class="status-bar">
      ⭐ 즐겨찾기: {{ favoriteCity.name }} ({{ favoriteCity.status }})
    </div>
  </div>
</template>

<style scoped>
.status-bar {
  background: #eef4ff;
  padding: 10px;
  text-align: center;
  color: #3559a8;
  font-weight: bold;
  border-radius: 6px;
}

.message { padding: 14px 0; color: #7b8798; }
.message.error { color: #c2414b; }
</style>
