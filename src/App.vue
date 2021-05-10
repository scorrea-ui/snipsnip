<template>
  <v-app>
    <v-app-bar app color="white">
      <v-img
        max-height="40px"
        max-width="40px"
        :src="require('@/assets/logo.png')"
      ></v-img>
      <v-app-bar-title>Snip Snip</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
});
</script>
