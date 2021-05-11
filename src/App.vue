<template>
  <v-app>
    <v-app-bar app>
      <v-img
        max-height="40px"
        max-width="40px"
        :src="require('@/assets/logo.png')"
      ></v-img>
      <v-app-bar-title>Snip Snip</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        :label="$t('theme')"
      ></v-switch>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer padless class="d-flex justify-end">
      <v-col class="text-center mt-2" cols="4">
        <v-select
          :items="languages"
          label="Language"
          v-model="language"
          item-text="title"
          item-value="language"
          @change="changeLocale"
        ></v-select>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "@/plugins/i18n";

export default Vue.extend({
  name: "App",
  data() {
    return {
      language: "en",
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "es", language: "es", title: "Español" },
        { flag: "de", language: "de", title: "Deutsche" },
      ],
    };
  },
  methods: {
    changeLocale() {
      i18n.locale = this.language;
    },
  },
});
</script>

<style lang="scss">
.v-messages {
  display: none;
}
</style>