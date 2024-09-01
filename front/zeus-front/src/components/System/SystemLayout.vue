<script setup lang="ts">
import NavbarLeft from '@/components/Site/NavbarLeft.vue';
import NavbarRight from '@/components/Site/NavbarRight.vue';
import Footer from '@/components/Site/Footer.vue';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      Main Content
    </v-main>
  </v-layout>
</template>
