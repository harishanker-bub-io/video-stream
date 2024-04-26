<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Featured Videos</h1>
    <Video :videoList="videos" class="max-w-6xl mx-auto" />
  </div>
</template>

<script setup>
const videos = ref([])

onBeforeMount(async () => {
  const data = await fetch('/api/videos/all')
  videos.value = await data.json()
  console.log(videos.value);
})
</script>