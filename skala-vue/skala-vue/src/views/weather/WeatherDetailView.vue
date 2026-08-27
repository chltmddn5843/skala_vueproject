<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mockWeatherList } from '@/models/mockWeather'

const route = useRoute()
const router = useRouter()

const cityData = computed(() => mockWeatherList.find((city) => city.id === route.params.cityId))
</script>

<template>
  <div class="detail-container">
    <h3>📊 지역별 상세 기상 관측 정보</h3>
    <hr />

    <div v-if="cityData" class="info-card">
      <h4>📍 지정 지역: {{ cityData.fullName }}</h4>
      <p>
        실시간 기온: <strong>{{ cityData.temp }}°C</strong>
      </p>
      <p>체감 온도: {{ cityData.feelsLike }}°C</p>
      <p>기상 현황: {{ cityData.status }}</p>
      <p>대기 습도: {{ cityData.moisture }}%</p>
      <p>구름 양: {{ cityData.cloudiness }}%</p>
      <p>현재 풍속: {{ cityData.wind }}m/s</p>
      <p class="recommendation">💡 {{ cityData.recommendation }}</p>
    </div>
    <div v-else>
      <p>해당 지역의 상세 데이터 장부가 존재하지 않습니다.</p>
    </div>

    <button @click="router.push('/mockup')" class="back-btn">← 지역 목록으로 돌아가기</button>
  </div>
</template>

<style scoped>
.detail-container {
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.info-card {
  background: #f1f2f6;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
}
.recommendation { margin-top: 12px; color: #3559a8; font-weight: 600; }
.back-btn {
  padding: 8px 12px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
