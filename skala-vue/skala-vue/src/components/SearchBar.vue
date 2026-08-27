<script setup>
// 1. 상위로 입력 텍스트를 전달할 커스텀 이벤트 등록 (매크로)
defineEmits(['update-query', 'search'])

// 2. 상위로부터 현재 검색 상태 값을 수신 (한글 동기화 상태 유지용)
defineProps({
  currentQuery: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="search-inner">
    <h3>도시 찾기</h3>
    <div class="search-row">
      <input
        type="search"
        :value="currentQuery"
        @input="$emit('update-query', $event.target.value)"
        @keyup.enter="$emit('search')"
        placeholder="예: Seoul, Busan"
      />
      <button type="button" @click="$emit('search')">검색</button>
    </div>
    <p>
      {{ currentQuery ? `“${currentQuery}” 검색 중` : '도시 이름으로 검색해 보세요.' }}
    </p>
  </div>
</template>

<style scoped>
input {
  width: 100%;
  padding: 11px 13px;
  font-size: 14px;
  border: 1px solid #ced9e7;
  border-radius: 9px;
  outline: none;
}

input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(71, 118, 230, 0.12);
}

.search-row { display: flex; gap: 8px; }
.search-row button {
  padding: 0 18px;
  color: white;
  background: var(--color-primary);
  border: 0;
  border-radius: 9px;
  cursor: pointer;
}

h3 { margin-bottom: 10px; color: var(--color-heading); font-weight: 700; }
p { margin-top: 8px; color: #7b8798; font-size: 13px; }
</style>
