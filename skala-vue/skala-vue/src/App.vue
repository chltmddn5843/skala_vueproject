<script setup>
import UnitToggler from '@/components/weather/UnitToggler.vue'

const navigation = [
  { to: '/', label: '실시간 날씨' },
  { to: '/mockup', label: 'Mockup' },
  { to: '/composition', label: 'Composition' },
  { to: '/components', label: 'Components' },
  { to: '/regions', label: '지역 선택' },
  { to: '/weather-api', label: 'Axios 날씨' },
  { to: '/crud', label: 'Axios CRUD' },
  { to: '/about', label: '소개' },
]
</script>

<template>
  <div class="app-container">
    <h1>SKALA Weather</h1>
    <div class="dashboard-wrapper">
      <nav class="navigation-bar">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="nav-item"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
      <UnitToggler class="unit-control" />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
@import '@/assets/exercise.css';

.unit-control {
  justify-content: flex-end;
  margin-bottom: 16px;
}
</style>
