<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-white">
    <NavBar class="flex-shrink-0" />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <footer class="py-4 text-center text-sm text-gray-400">
      &copy; {{ new Date().getFullYear() }} Streaming App
    </footer>
  </div>
</template>