<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card elevation="5">
          <v-card-text>
            <p>{{ this.title }}</p>
            <p>{{ this.description }}</p>
            <prism :language="language" :code="code"></prism>
          </v-card-text>
          <v-card-actions>
            <v-btn class="mx-2" color="primary" text small @click="editSnippet">
              {{ $t("edit") }}
            </v-btn>
            <v-btn
              class="mx-2"
              color="red"
              text
              small
              @click="$emit('delete', id)"
            >
              {{ $t("cancel") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Prism from "vue-prismjs";
import "prismjs/themes/prism.css";
import { mapActions } from "vuex";

export default Vue.extend({
  props: ["title", "language", "code", "description", "id"],
  components: {
    Prism,
  },
  methods: {
    ...mapActions(["deleteCode"]),
    editSnippet(): void {
      this.$emit("edit", {
        id: this.id,
        title: this.title,
        language: this.language,
        code: this.code,
        description: this.description,
      });
    },
  },
});
</script>