<script setup>
import WeatherMockup from './components/WeatherMockup.vue'
import WeatherComposition from './components/WeatherComposition.vue'
import WeatherParent from './components/WeatherParent.vue'
import UnitToggler from './components/UnitToggler.vue'
</script>

<template>
  <div class="app-container">
    <h1>SKALA Weather</h1>
    <hr />
    <WeatherMockup />
  </div>
  <div class="app-container">
    <h1>도시 날씨 검색</h1>
    <hr />
    <WeatherComposition />
  </div>
  <div class="app-container">
    <h1>관심 지역</h1>
    <hr />
    <WeatherParent />
  </div>
  <div class="app-container">
    <h1>날씨 둘러보기</h1>
    <hr />
    <div class="dashboard-wrapper">
      <nav class="navigation-bar">
        <RouterLink to="/" class="nav-item">날씨</RouterLink>
        <RouterLink to="/about" class="nav-item">서비스 소개</RouterLink>
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
  <div class="app-container">
    <h1>맞춤 날씨</h1>
    <hr />
    <div class="dashboard-wrapper">
      <nav class="navigation-bar">
        <RouterLink to="/" class="nav-item">날씨</RouterLink>
        <RouterLink to="/about" class="nav-item">서비스 소개</RouterLink>
        <UnitToggler />
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>


<style>
@import '@/assets/exercise.css';
</style>
