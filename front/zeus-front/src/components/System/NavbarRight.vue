<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from "pinia"

const router = useRouter();
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

function logout() {
  useUserStore().setIsAutenticated(false)
  router.push('/');
}
</script>

<template>
  <v-btn @click="changeMode">
    <v-icon v-if="theme === 'dark'" icon="mdi-weather-sunny" size="large"/>
    <v-icon v-if="theme === 'light'" icon="mdi-weather-night" size="large"/>
  </v-btn>
  <div class="d-flex ga-3">
    <v-btn @click="logout" :style="{ textTransform: 'none' }" :class="appLoginColor,hoverBtnColor">Logout</v-btn>
  </div>
</template>
