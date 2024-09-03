<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function capitalizeFirstLetter(text: string) {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const capitalizedRouteName = computed(() => {
  const routeName = router.currentRoute.value.name as string | undefined
  return routeName ? capitalizeFirstLetter(routeName) : ''
});
</script>

<template>
  <div class="d-flex justify-space-between">
    <h1>{{ capitalizedRouteName }}</h1>
    <v-breadcrumbs :items="['Feed de Notícias']"></v-breadcrumbs>
  </div>
  
</template>