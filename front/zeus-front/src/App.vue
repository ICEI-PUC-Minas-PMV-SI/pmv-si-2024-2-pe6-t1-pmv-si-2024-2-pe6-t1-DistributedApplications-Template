<script setup lang="ts">
import SiteLayout from '@/views/Site/SiteLayout.vue'
import { useThemeStore } from '@/stores/theme';
</script>

<template>
  <v-app :theme="useThemeStore().theme">
    <SiteLayout />
  </v-app>
</template>

