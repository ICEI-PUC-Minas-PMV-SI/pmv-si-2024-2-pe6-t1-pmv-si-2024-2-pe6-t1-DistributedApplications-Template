<script setup lang="ts">
import SiteLayout from '@/views/Site/SiteLayout.vue'
import { useThemeStore } from '@/stores/theme';
</script>

<template>
  <v-app :theme="useThemeStore().theme">
    <SiteLayout />
  </v-app>
</template>

<style>
body {
  background-color: #01579B;
}

@media (min-width: 1024px) {
    #app {
        display: block;
        grid-template-columns: 1fr 1fr;
        padding: 0 0;
    }
}
</style>

