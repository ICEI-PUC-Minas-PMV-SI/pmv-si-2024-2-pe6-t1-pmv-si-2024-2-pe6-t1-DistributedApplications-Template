<script setup lang="ts">
import { ref } from 'vue';

const theme = ref('light');

function changeMode() {
  if(theme.value === 'light') {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }
}
</script>

<template>
  <v-theme-provider class="pa-10" :theme="theme" with-background>
    <v-btn @click="changeMode">
      <v-icon v-if="theme === 'dark'" icon="mdi-weather-sunny" size="large"/>
      <v-icon v-if="theme === 'light'" icon="mdi-weather-night" size="large"/>
    </v-btn>
    <h3>Home | About | Login</h3>
  </v-theme-provider>
</template>