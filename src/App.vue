<script setup lang="ts">
import { ref } from 'vue';
import { MultiSelectGacha } from './Gacha'
import AButton from './components/AButton.vue'
import GachaPlayGround from './components/GachaPlayGround.vue'
import { useStation } from './composables/Station'
import FallenLeaves from './components/FallenLeaves.vue';

const { getList } = useStation()

const prefs = getList('tokyo')
const results = ref<(string | null)[]>(createResults())

const stationGacha = new MultiSelectGacha({ options: prefs })

function createResults() {
  const results = []

  for (let i = 0; i < 10; i++) {
    results.push(null)
  }

  return results
}

function roll() {
  results.value = createResults()
  setTimeout(() => {
    results.value = stationGacha.roll(10)
  }, 1000)
}
</script>

<template>
  <div class="App">
    <div class="container">
      <div class="title">
        さんぽ10連ガチャ
      </div>

      <AButton
        label="ガチャを回す"
        @click="roll"
      />

      <GachaPlayGround
        :results="results"
      />
    </div>
    <FallenLeaves />
  </div>
</template>

<style scoped lang="postcss">
.App {
  position: relative;
  min-height: 100vh;
  padding: 64px 0 40px;
  overflow: hidden;
  color: var(--c-text);
  background-color: var(--c-bg);
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
  margin: 0 auto;
  z-index: 3;

  @media (min-width: 768px) {
    width: 400px;
  }
}

.title {
  padding: 16px;
  text-align: center;
  font-size: 24px;
  background-color: #ffebeb;
  border: 2px solid var(--c-border);
  border-radius: 4px;
}
</style>
