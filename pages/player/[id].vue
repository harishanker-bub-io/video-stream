<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <video
        controls
        muted
        autoplay
        crossOrigin="anonymous"
        class="w-full rounded-lg shadow-lg"
      >
        <source :src="`/api/videos/video/${vidName}`" type="video/mp4" />
        <track
          label="English"
          kind="captions"
          srcLang="en"
          :src="`/api/videos/video/${vidName}/caption`"
          default
        />
      </video>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const vidName = route.params.id
</script>