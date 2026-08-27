<script setup>
import { computed, markRaw, ref } from 'vue'
import Select from 'primevue/select'

const modules = import.meta.glob('../examples/**/*.vue', { eager: true })
const examples = Object.entries(modules).map(([path, module]) => ({
  label: path.replace('../examples/', '').replace('.vue', ''),
  value: path,
  component: markRaw(module.default),
}))
const selectedExample = ref(examples[0]?.value)
const currentExample = computed(
  () => examples.find((example) => example.value === selectedExample.value)?.component,
)
</script>

<template>
  <section class="examples-view">
    <header>
      <div>
        <h2>Vue 예제 모음</h2>
        <p>폴더와 예제를 선택하면 아래에서 바로 실행됩니다.</p>
      </div>
      <Select
        v-model="selectedExample"
        :options="examples"
        option-label="label"
        option-value="value"
        placeholder="예제 선택"
        filter
      />
    </header>

    <div class="example-preview">
      <component :is="currentExample" />
    </div>
  </section>
</template>

<style scoped>
.examples-view header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.examples-view h2 { color: var(--color-heading); font-weight: 700; }
.examples-view p { color: #7b8798; font-size: 13px; }
.example-preview {
  padding: 18px;
  background: #f8faff;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: auto;
}

@media (max-width: 640px) {
  .examples-view header { align-items: stretch; flex-direction: column; }
}
</style>
