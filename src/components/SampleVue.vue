<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const countUp = () => {
  count.value++
}
</script>

<template>
  <div class="my-8">
    <p className="my-2">Count: {{ count }}</p>
    <button type="button" className="py-1 px-4 rounded bg-slate-600 text-white my-2" @click="countUp">+1</button>
  </div>
</template>
