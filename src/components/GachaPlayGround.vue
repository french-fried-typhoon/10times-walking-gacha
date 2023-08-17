<script setup lang="ts">
defineProps<{
  results: (string | null)[]
}>()

function isOpen(result: string | null) {
  return result !== null
}
</script>

<template>
  <div class="GachaPlayGround">
    <h2 class="title">結果</h2>

    <div
      v-if="results.length === 0"
      class="not-started"
    >
      ???
    </div>
    <div v-else class="results">
      <div
        v-for="(result, i) in results"
        :key="i"
        class="result"
      >
        <div
          class="card"
          :class="{ open: isOpen(result) }"
        >
          <div class="front">
            {{ result }}
          </div>
          
          <div class="back">
            ？？？
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.GachaPlayGround {
  padding: 16px;
  background-color: #ffebeb;
  border: 2px solid var(--c-border);
  border-radius: 4px;
}

.not-started {
  margin: 8px 0;
  font-size: 20px;
  text-align: center;
}

.title {
  margin: 8px 0 28px;
  font-size: 24px;
  text-align: center;
}

.card {
  position: relative;
  min-height: 60px;
  margin: 8px 0;
  padding: 16px;
  font-size: 20px;
  background-color: #fff;
  border: 2px solid var(--c-border);
  border-radius: 2px;

  transform-style: preserve-3d;
  transition: 1.2s;
}

.card.open {
  transform: rotateY(180deg);
}

.front, .back {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: 1.4s;
}

.front {
  transform: rotateY(180deg);
}

.back { 
  justify-content: center;
  color: var(--c-text);
  background-color: #fff;
}

.result:nth-child(2) .card.open { transition-delay: 1.0s; }
.result:nth-child(3) .card.open { transition-delay: 2.0s; }
.result:nth-child(4) .card.open { transition-delay: 3.0s; }
.result:nth-child(5) .card.open { transition-delay: 4.0s; }
.result:nth-child(6) .card.open { transition-delay: 5.0s; }
.result:nth-child(7) .card.open { transition-delay: 6.0s; }
.result:nth-child(8) .card.open { transition-delay: 7.0s; }
.result:nth-child(9) .card.open { transition-delay: 8.0s; }
.result:nth-child(10) .card.open { transition-delay: 9.0s; }
</style>


