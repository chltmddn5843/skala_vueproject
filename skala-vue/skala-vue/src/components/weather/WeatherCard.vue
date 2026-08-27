<script setup>
import { computed } from 'vue'
import { useConfigStore } from '@/stores/configStore'
import { withSubjectParticle } from '@/utils/korean'

const props = defineProps({
  cityItem: {
    type: Object,
    required: true,
  },
  showFavorite: {
    type: Boolean,
    default: true,
  },
  showDetail: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['select-card', 'click-detail', 'favorite'])
const configStore = useConfigStore()
const convertTemp = (temp) =>
  Math.round(
    configStore.unit === 'celsius'
      ? temp
      : (temp * 9) / 5 + 32,
  )
const displayTemp = computed(() => convertTemp(props.cityItem.temp))
const displayFeelsLike = computed(() => convertTemp(props.cityItem.feelsLike))
</script>

<template>
  <div class="weather-card" @click="emit('select-card', `${withSubjectParticle(cityItem.name)} 선택되었습니다.`)">
    <div class="weather-summary">
      <h4>{{ cityItem.name }}</h4>
      <p>{{ cityItem.status }} · {{ displayTemp }}{{ configStore.unitSymbol }}</p>
    </div>

    <span v-if="cityItem.temp >= 25" class="badge hot">🔥 더움</span>
    <span v-else class="badge cool">❄️ 선선함</span>

    <button v-if="showDetail" class="btn-detail" @click.stop="emit('click-detail', cityItem.name, cityItem.status)">상세</button>

    <button v-if="showFavorite" class="btn-favorite" @click.stop="emit('favorite', cityItem)">관심</button>

    <dl class="weather-metrics">
      <div>
        <dt>체감</dt>
        <dd>{{ displayFeelsLike }}{{ configStore.unitSymbol }}</dd>
      </div>
      <div>
        <dt>습도</dt>
        <dd>{{ cityItem.moisture }}%</dd>
      </div>
      <div>
        <dt>구름</dt>
        <dd>{{ cityItem.cloudiness }}%</dd>
      </div>
      <div>
        <dt>풍속</dt>
        <dd>{{ cityItem.wind }}m/s</dd>
      </div>
    </dl>

    <p class="activity">💡 {{ cityItem.recommendation }}</p>
  </div>
</template>


<style scoped>
.weather-card {
  background: #fff;
  border: 1px solid #e1e8f0;
  padding: 14px;
  margin-bottom: 8px;
  border-radius: 10px;
  cursor: pointer;

  /* 1. 플렉스박스로 변경하여 내부 요소를 좌우 정렬 */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  gap: 10px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.weather-card:hover {
  border-color: #aebfe8;
  transform: translateY(-1px);
}

.weather-summary { flex: 1; min-width: 100px; }
.weather-summary h4 { color: var(--color-heading); font-weight: 700; }
.weather-summary p { color: #7b8798; font-size: 13px; }

.badge {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 999px;
  color: #536176;
}

.hot {
  background-color: #fff0eb;
}

.cool {
  background-color: #eaf4ff;
}

.btn-detail,
.btn-favorite {
  position: static;
  padding: 7px 10px;
  cursor: pointer;
  white-space: nowrap;
  color: #536176;
  background: #f4f7fb;
  border: 1px solid #dbe3ed;
  border-radius: 7px;
}

.btn-detail:hover,
.btn-favorite:hover {
  color: var(--color-primary);
  border-color: #aebfe8;
}

.weather-metrics {
  flex-basis: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin: 4px 0 0;
}

.weather-metrics div { padding: 8px; background: #f8faff; border-radius: 8px; }
.weather-metrics dt { color: #8994a5; font-size: 11px; }
.weather-metrics dd { color: var(--color-heading); font-size: 13px; font-weight: 700; }
.activity {
  flex-basis: 100%;
  padding: 10px 12px;
  color: #3559a8;
  background: #eef4ff;
  border-radius: 8px;
  font-size: 13px;
}

@media (max-width: 560px) {
  .weather-metrics { grid-template-columns: repeat(2, 1fr); }
}
</style>
