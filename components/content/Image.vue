<script lang="ts" setup>
import UiImage from '~/components/ui/UiImage/UiImage.vue';

defineProps<{ 
  path: string,
}>()
</script>

<template>
  <UiImage :path="path" />
</template>
