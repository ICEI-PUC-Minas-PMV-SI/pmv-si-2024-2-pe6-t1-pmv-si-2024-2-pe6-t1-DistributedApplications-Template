<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

import NavbarLeft from '@/components/Site/NavbarLeft.vue';
import NavbarRight from '@/components/Site/NavbarRight.vue';
import Footer from '@/components/Site/Footer.vue';

const appBarColor = computed(() => {
  return useThemeStore().theme === 'light' ? 'blue-grey-lighten-5' : 'blue-grey-darken-4'
})
const appMainColor = computed(() => {
  return useThemeStore().theme === 'light' ? 'bg-light-blue-darken-4' : 'bg-blue-grey-darken-3'
})
</script>

<template>
  <v-app-bar app :color="appBarColor">
    <template v-slot:prepend>
      <NavbarLeft />
    </template>
    <template v-slot:append>
      <NavbarRight />
    </template>
  </v-app-bar>

  <v-main :class="appMainColor">
    <router-view />
  </v-main>

  <v-footer app>
    <Footer />
  </v-footer>
</template>
