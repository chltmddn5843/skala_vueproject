<script setup>
import { ref } from 'vue'
import BaseDashboardCard from '@/components/weather/BaseDashboardCard.vue'
import WeatherCard from '@/components/weather/WeatherCard.vue'
import { mockWeatherList } from '@/models/mockWeather'

const weatherList = ref([...mockWeatherList])

const selectedCityInfo = ref('날씨 카드를 선택해 보세요.')

const showDetail = (city) => {
  window.alert(`${city.name}의 현재 날씨는 [${city.status}] 상태입니다. 습도는 ${city.moisture}%입니다.`)
}
</script>




<template>
  <div class="dashboard-wrapper">
    <BaseDashboardCard>
      <h3>지역별 날씨 현황</h3>
      <WeatherCard
        v-for="item in weatherList"
        :key="item.id"
        :city-item="item"
        :show-favorite="false"
        @select-card="(message) => (selectedCityInfo = message)"
        @click-detail="showDetail(item)" 
      />
    </BaseDashboardCard>

    <div class="status-bar">
      {{ selectedCityInfo }}
    </div>
  </div>
</template>
