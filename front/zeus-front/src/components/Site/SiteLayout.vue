<script setup lang="ts">
import NavbarLeft from '@/components/Site/NavbarLeft.vue';
import NavbarRight from '@/components/Site/NavbarRight.vue';
import Footer from '@/components/Site/Footer.vue';
</script>

<template>
  <v-app-bar app color="blue-grey-lighten-5">
    <template v-slot:prepend>
      <NavbarLeft />
    </template>
    <NavbarRight />
  </v-app-bar>

  <v-main class="bg-light-blue-darken-4">
    <router-view />
  </v-main>

  <v-footer>
    <Footer />
  </v-footer>
</template>
