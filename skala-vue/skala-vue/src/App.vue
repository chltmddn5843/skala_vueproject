<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import UnitToggler from '@/components/weather/UnitToggler.vue'

const navigation = [
  { to: '/', label: '서비스 소개' },
  { to: '/weather', label: '실시간 날씨' },
  { to: '/mockup', label: 'Mockup' },
  { to: '/composition', label: 'Composition' },
  { to: '/components', label: 'Components' },
  { to: '/regions', label: '지역 선택' },
  { to: '/weather-api', label: 'Axios 날씨' },
  { to: '/crud', label: 'Axios CRUD' },
  { to: '/examples', label: 'Vue 예제' },
]
const route = useRoute()
const unitRoutes = ['/weather', '/mockup', '/composition', '/components', '/regions']
const showUnitToggler = computed(() => unitRoutes.includes(route.path))
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
      <UnitToggler v-if="showUnitToggler" class="unit-control" />
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
