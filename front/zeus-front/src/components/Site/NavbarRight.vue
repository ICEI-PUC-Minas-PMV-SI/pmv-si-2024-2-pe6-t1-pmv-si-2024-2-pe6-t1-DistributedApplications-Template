<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from "pinia";

const { theme } = storeToRefs(useThemeStore());

function changeMode() {
  if(theme.value === 'light') {
    useThemeStore().setTheme('dark')
  } else {
    useThemeStore().setTheme('light')
  }
}
</script>

<template>
  <v-btn @click="changeMode">
    <v-icon v-if="theme === 'dark'" icon="mdi-weather-sunny" size="large"/>
    <v-icon v-if="theme === 'light'" icon="mdi-weather-night" size="large"/>
  </v-btn>
  <div class="d-flex ga-3">
    <router-link to="/" class="text-black rounded-lg px-3 py-1 custom-btn">Home</router-link>
    <router-link to="/about" class="text-black rounded-lg px-3 py-1 custom-btn">About</router-link>
    <router-link to="/login" class="text-white bg-orange-darken-1 rounded-lg px-3 py-1">Login</router-link>
  </div>
</template>

<style scoped>
.custom-btn:hover {
  background-color: #cfcfcf;
}
</style>