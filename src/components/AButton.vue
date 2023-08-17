<script setup lang="ts">
defineProps<{
  label: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

function handleClick() {
  emit('click')
}
</script>

<template>
  <button
    class="AButton"
    @click="handleClick"
  >
    <span class="label">
      {{ label }} 
    </span>
  </button>
</template>

<style scoped lang="postcss">
.AButton {
  padding: 8px 32px;
  color: #ffffff;
  background-color: var(--c-base);
  border-radius: 8px;
  transition: opacity 0.2s;

  &:hover {
    background-color: var(--c-base-light-1);
  }
}

</style>
