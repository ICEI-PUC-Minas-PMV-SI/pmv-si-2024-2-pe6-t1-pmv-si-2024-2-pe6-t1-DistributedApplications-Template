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
  <h3>Home | About | Login</h3>
</template>