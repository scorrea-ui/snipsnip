<template>
  <v-app>
    <v-app-bar app color="white">
      <v-toolbar-title> Snip Snip </v-toolbar-title>
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
