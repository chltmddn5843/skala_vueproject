<template>
  <div class="base-dashboard-card">
    <slot>기본 출력</slot>
  </div>
</template>

<style scoped>
.base-dashboard-card {
  background: #f8faff;
  padding: 18px;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid var(--color-border);
  box-sizing: border-box;
  max-width: 100%;
  word-break: break-word;
  overflow: hidden;
}
</style>
