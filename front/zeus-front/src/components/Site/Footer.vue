<script setup lang="ts">

</script>

<template>
  <div class="d-block d-md-flex justify-space-between ga-16 custom-margin">
    <span>&copy; 2024 Zeus. Todos os direitos reservados</span>
    <div class="d-none d-md-flex">
      <div class="mr-4">
        <h5 class="text-subtitle-1 font-weight-bold">Navegação</h5>
        <ul class="text-body-2" style="list-style: none;">
          <li>Início</li>
          <li>Quem Somos</li>
          <li>Contatos</li>
        </ul>
      </div>
      <div>
        <h5 class="text-subtitle-1 font-weight-bold">Privacidade</h5>
        <ul class="text-body-2" style="list-style: none;">
          <li>Termos de Uso</li>
          <li>Políticas de Privacidade</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-margin {
  margin: 0 140px 0 140px;
  width: 100%;
}

@media (max-width: 768px) {
  .custom-margin {
    margin: 0 20px 0 20px;
  }
}
</style>