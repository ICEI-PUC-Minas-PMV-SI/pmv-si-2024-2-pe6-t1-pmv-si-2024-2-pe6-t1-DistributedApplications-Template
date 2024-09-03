<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

const appLoginColor = computed(() => {
  return useThemeStore().theme === 'light' ? 'bg-orange-darken-1' : 'bg-orange-darken-2'
})
const hoverBtnColor = computed(() => {
  return useThemeStore().theme === 'light' ? 'custom-hover-btn-light' : 'custom-hover-btn-dark'
})

const services = ref([
  { text: 'Gestão de moradores', icon: 'mdi-check' },
  { text: 'Gestão de visitantes', icon: 'mdi-check' },
  { text: 'Gestão de visitas ', icon: 'mdi-check' },
  { text: 'Gestão de funcionários', icon: 'mdi-check' },
  { text: 'Gestão de apartamentos', icon: 'mdi-check' },
  { text: 'Gestão de avisos internos', icon: 'mdi-check' },
  { text: 'Gestão de documentos administrativos', icon: 'mdi-check' },
])
</script>

<template>
  <v-container class="d-flex flex-column align-center justify-center fill-height">
    
    <v-row>
      <v-col sm="12" md="7">
        <h1 class="text-h3">Bem-vindo ao Sistema de Gestão de Condomínio</h1>
        <p class="text-h6">Gerencie seu condomínio de forma eficiente e prática.</p>
        <v-img
          width="600"
          class="rounded-lg"
          aspect-ratio="16/9"
          cover
          src="https://st2.depositphotos.com/4743681/47108/i/450/depositphotos_471084482-stock-photo-cityscape-residential-area-modern-apartment.jpg"
        />
      </v-col>
      <v-col sm="12" md="5">
        <v-card class="h-100 pa-4 d-flex flex-column justify-space-between">
          <div>
            <h2>Mas o que eu vou conseguir gerenciar?</h2>
            <v-list disabled>
              <v-list-item
                v-for="(item, i) in services"
                :key="i"
              >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>
  
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </div>

          <div>
            <h2 class="mb-5">E isso tudo em um só lugar, começe agora!</h2>
            <div class="d-flex justify-center">
              <v-btn :class="appLoginColor,hoverBtnColor" color="flex-grow-1">
                Criar conta
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
