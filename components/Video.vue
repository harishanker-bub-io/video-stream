<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div
      v-for="(video, id) in videoList"
      :key="id"
        class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <NuxtLink :to="`/player/${video.id}`">
        <div class="relative h-48">
          <div
            class="absolute inset-0 bg-cover bg-center"
            :style="{ backgroundImage: `url(${video.poster})` }"
          ></div>
        </div>
        <div class="p-4">
          <h2 class="text-lg font-semibold text-white">{{ video.name }}</h2>
          <p class="text-gray-400">{{ video.duration }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['videoList'])
</script>