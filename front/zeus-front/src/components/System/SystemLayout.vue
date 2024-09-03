<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

import NavbarLeft from '@/components/Site/NavbarLeft.vue'
import NavbarRight from '@/components/System/NavbarRight.vue'
import Footer from '@/components/Site/Footer.vue'

const appBarColor = computed(() => {
  return useThemeStore().theme === 'light' ? 'light-blue-darken-4' : 'blue-grey-darken-3';
})
</script>

<template>
  <v-layout class="bg-blue-grey-lighten-5">
    <v-app-bar :color="appBarColor">
      <template v-slot:prepend>
        <v-img
          class="ml-3"
          :width="200"
          aspect-ratio="16/9"
          cover
          src="/src/assets/logo-dark.png"
        ></v-img>
      </template>
      <template v-slot:append>
        <NavbarRight />
      </template>
    </v-app-bar>

    <v-navigation-drawer permanent>
      <v-list
        density="compact"
        nav
      >
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      Main Content
    </v-main>
  </v-layout>
</template>
