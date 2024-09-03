<script setup lang="ts">

</script>

<template>
  <v-container>
    <v-card
      class="mr-3 pa-5"
      max-width="1100"
    >

      <v-card v-for="item in 3" title="Twitter" class="elevation-0 border-b">
        <v-card-text class="text-subtitle-1 py-2">
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
        </v-card-text>

        <v-card-actions>
          <v-list-item class="w-100">
            <template v-slot:prepend>
              <v-avatar
                color="grey-darken-3"
                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-avatar>
            </template>

            <v-list-item-title>Evan You</v-list-item-title>

            <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>

            <template v-slot:append>
              <div class="justify-self-end custom-margin">
                <span class="text-subtitle-2 opacity-60">24 de abril de 2024</span>
              </div>
            </template>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>

<style scoped>
.custom-margin {
  margin-top: 0px;
}
</style>