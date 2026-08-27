<script setup>
import { onMounted } from 'vue'
import Message from 'primevue/message'
import Skeleton from 'primevue/skeleton'

import BaseDashboardCard from '@/components/weather/BaseDashboardCard.vue'
import SearchBar from '@/components/weather/SearchBar.vue'
import WeatherCard from '@/components/weather/WeatherCard.vue'
import { useWeatherViewModel } from '@/viewmodels/useWeatherViewModel'

const {
  weatherList,
  searchQuery,
  selectedCityInfo,
  favoriteCity,
  isLoading,
  errorMessage,
  fetchWeather,
  selectFavorite,
} = useWeatherViewModel()

onMounted(fetchWeather)
</script>

<template>
  <div class="dashboard-wrapper">
    <BaseDashboardCard>
      <SearchBar
        :current-query="searchQuery"
        :is-loading="isLoading"
        @update-query="(val) => (searchQuery = val)"
        @search="fetchWeather"
      />
    </BaseDashboardCard>

    <BaseDashboardCard>
      <h3>현재 날씨</h3>
      <Skeleton v-if="isLoading" height="4.5rem" border-radius="10px" />
      <Message v-else-if="errorMessage" severity="error">{{ errorMessage }}</Message>
      <WeatherCard
        v-for="item in weatherList"
        :key="item.id"
        :city-item="item"
        @select-card="(msg) => (selectedCityInfo = msg)"
        @click-detail="(name, status) => (selectedCityInfo = `${name}의 현재 날씨는 ${status}입니다.`)"
        @favorite="selectFavorite"
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

</style>
