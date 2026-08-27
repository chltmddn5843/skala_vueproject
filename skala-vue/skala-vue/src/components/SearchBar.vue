<script setup>
// 1. 상위로 입력 텍스트를 전달할 커스텀 이벤트 등록 (매크로)
defineEmits(['update-query'])

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
    <input type="text" :value="currentQuery" @input="$emit('update-query', $event.target.value)" placeholder="검색할 도시 이름 입력" />
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

h3 { margin-bottom: 10px; color: var(--color-heading); font-weight: 700; }
p { margin-top: 8px; color: #7b8798; font-size: 13px; }
</style>
