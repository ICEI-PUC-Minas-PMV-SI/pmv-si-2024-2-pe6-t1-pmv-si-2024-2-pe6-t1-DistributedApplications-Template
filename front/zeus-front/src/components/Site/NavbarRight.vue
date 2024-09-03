<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from "pinia"

const { theme } = storeToRefs(useThemeStore());

const appLoginColor = computed(() => {
  return theme.value === 'light' ? 'bg-orange-darken-1' : 'bg-orange-darken-2'
})
const hoverBtnColor = computed(() => {
  return theme.value === 'light' ? 'custom-hover-btn-light' : 'custom-hover-btn-dark'
})

function changeMode() {
  if(theme.value === 'light') {
    useThemeStore().setTheme('dark')
  } else {
    useThemeStore().setTheme('light')
  }
}
</script>

<template>
  <div class="d-flex ga-3">
    <v-btn @click="changeMode" variant="text" :class="hoverBtnColor">
      <v-icon v-if="theme === 'dark'" icon="mdi-weather-sunny" size="large"/>
      <v-icon v-if="theme === 'light'" icon="mdi-weather-night" size="large"/>
    </v-btn>
    <v-btn to="/" :style="{ textTransform: 'none' }" class="custom-hover-btn" :class="hoverBtnColor">
      Home
    </v-btn>
    <v-btn to="/about" :style="{ textTransform: 'none' }" class="custom-hover-btn" :class="hoverBtnColor">
      About
    </v-btn>
    <v-btn to="/login" :class="appLoginColor,hoverBtnColor" :style="{ textTransform: 'none' }" class="custom-hover-btn">
      Login
    </v-btn>
  </div>
</template>
