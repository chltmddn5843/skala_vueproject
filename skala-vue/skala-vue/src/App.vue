<script setup>
import UnitToggler from './components/UnitToggler.vue'
</script>

<template>
  <div class="app-container">
    <h1>SKALA Weather</h1>
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
