<script setup>
import { computed, ref, watch } from 'vue'
import WeatherCard from '@/components/weather/WeatherCard.vue'
import { mockWeatherList } from '@/models/mockWeather'

const weatherList = mockWeatherList

const selectedCityId = ref('')
const hoverCount = ref(0)
const selectedCity = computed(() =>
  weatherList.find((city) => city.id === selectedCityId.value),
)
const weatherMessage = computed(() =>
  selectedCity.value
    ? `${selectedCity.value.name}은 현재 ${selectedCity.value.status}, ${selectedCity.value.temp}°C입니다.`
    : '아직 선택한 지역이 없습니다.',
)

function loadWeather(city) {
  console.log(`🖱️ mouseenter 함수 호출: ${city.name} 날씨를 불러옵니다.`)
  selectedCityId.value = city.id
  hoverCount.value++
}

watch(selectedCity, (city) => {
  if (city) console.log('선택된 지역 데이터:', city)
})

watch(hoverCount, (count, previousCount) => {
  console.log(`지역 조회 횟수: ${previousCount} → ${count}`)
})
</script>


<template>
  <div class="dashboard-wrapper">
    <section class="search-box">
      <h3>🗺️ 지역 선택</h3>
      <p>버튼에 마우스를 올리면 날씨가 자동으로 호출됩니다.</p>
      <p>{{ weatherMessage }} (조회 {{ hoverCount }}회)</p>

      <div class="region-buttons">
        <button
          v-for="city in weatherList"
          :key="city.id"
          class="region-button"
          :class="{ active: city.id === selectedCityId }"
          @mouseenter="loadWeather(city)"
          @focus="loadWeather(city)"
        >
          {{ city.name }}
        </button>
      </div>
    </section>

    <WeatherCard
      v-if="selectedCity"
      :city-item="selectedCity"
      :show-detail="false"
      :show-favorite="false"
    />
    
    <p v-else class="status-bar">지역 버튼에 마우스를 올려보세요.</p>
    
  </div>
</template>

<style scoped>
.region-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.region-button {
  padding: 8px 14px;
  color: #475569;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  cursor: pointer;
}

.region-button:hover,
.region-button:focus,
.region-button.active {
  color: white;
  background: #2563eb;
  border-color: #2563eb;
}
</style>
