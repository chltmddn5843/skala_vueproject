<script setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

// 1. 상위로 입력 텍스트를 전달할 커스텀 이벤트 등록 (매크로)
defineEmits(['update-query', 'search'])

// 2. 상위로부터 현재 검색 상태 값을 수신 (한글 동기화 상태 유지용)
defineProps({
  currentQuery: {
    type: String,
    default: '',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="search-inner">
    <h3>도시 찾기</h3>
    <div class="search-row">
      <InputText
        :model-value="currentQuery"
        @update:model-value="$emit('update-query', $event)"
        @keyup.enter="$emit('search')"
        placeholder="예: Seoul, Busan"
        fluid
      />
      <Button
        type="button"
        label="검색"
        :loading="isLoading"
        @click="$emit('search')"
      />
    </div>
    <p>
      {{ currentQuery ? `“${currentQuery}” 검색 중` : '도시 이름으로 검색해 보세요.' }}
    </p>
  </div>
</template>

<style scoped>
.search-row { display: flex; gap: 8px; }
.search-row .p-inputtext { flex: 1; min-width: 0; }

h3 { margin-bottom: 10px; color: var(--color-heading); font-weight: 700; }
p { margin-top: 8px; color: #7b8798; font-size: 13px; }
</style>
