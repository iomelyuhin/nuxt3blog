<script lang="ts" setup>
import UiImage from '~/components/ui/UiImage/UiImage.vue';

const count = ref(0)
const dataBlog = ref()
const pendingBlog = ref()
const double = computed(() => count.value * 2)
const fetchData = async () => {
  const { data, refresh, pending } = await useFetch('/api/blogList.json');
  count.value ++
  dataBlog.value = data;
  pendingBlog.value = pending;
}
</script>

<template>
  <div class="main">Main page {{ double }}</div>
  <pre>{{ pendingBlog }}</pre>
  <pre>{{ dataBlog }}</pre>
  <button @click="fetchData">test me {{ count }}</button>
  <ContentDoc />
  <UiImage path="plafon.png" />
</template>
