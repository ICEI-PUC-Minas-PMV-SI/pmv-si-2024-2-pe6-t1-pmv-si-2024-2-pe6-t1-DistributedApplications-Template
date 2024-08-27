<script setup lang="ts">
import NavbarLeft from '@/components/Site/NavbarLeft.vue';
import NavbarRight from '@/components/Site/NavbarRight.vue';
</script>

<template>
  <v-app-bar app>
    <template v-slot:prepend>
      <NavbarLeft />
    </template>
    <NavbarRight />
  </v-app-bar>

  <v-main>
    <router-view />
  </v-main>

  <v-footer app>
    <span>Zeus Software Company &copy; 2024</span>
  </v-footer>
</template>
