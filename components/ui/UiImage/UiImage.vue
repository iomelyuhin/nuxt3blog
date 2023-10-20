<script lang="ts" setup>
defineProps<{ 
  path: string,
}>()
</script>

<template>
  <nuxt-img fit="cover" format="webp,avif" :src="`images/${path}`" sizes="100vw sm:50vw md:400px" />
</template>
