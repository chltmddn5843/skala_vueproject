<script setup>
import { computed } from 'vue'
import SelectButton from 'primevue/selectbutton'
import { useConfigStore } from '@/stores/configStore'

const configStore = useConfigStore()
const options = [
  { label: '℃', value: 'celsius' },
  { label: '℉', value: 'fahrenheit' },
]
const selectedUnit = computed({
  get: () => configStore.unit,
  set: (unit) => {
    if (unit && unit !== configStore.unit) configStore.toggleUnit()
  },
})
</script>

<template>
  <div class="unit-toggler">
    <span class="unit-label">온도 단위</span>
    <SelectButton
      v-model="selectedUnit"
      :options="options"
      option-label="label"
      option-value="value"
      :allow-empty="false"
      size="small"
      aria-label="온도 단위"
    />
  </div>
</template>

<style scoped>
.unit-toggler { margin-left: auto; display: flex; align-items: center; gap: 8px; }
.unit-label { color: #68758a; font-size: 13px; font-weight: 600; }
</style>
