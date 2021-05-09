<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="submit">
          <v-text-field
            label="Snippet Name"
            v-model="form.title"
          ></v-text-field>
          <v-text-field
            label="Snippet Description"
            v-model="form.description"
          ></v-text-field>
          <v-select
            :items="languages"
            label="Language"
            v-model="form.language"
          ></v-select>
          <v-textarea
            name="input-7-1"
            label="Snippet Code"
            auto-grow
            v-model="form.code"
          ></v-textarea>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import languages from "@/utils/languages";
export default Vue.extend({
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      languages,
    };
  },
  methods: {
    ...mapActions(["submitCode"]),
    submit() {
      this.$emit("save", this.form);
    },
  },
});
</script>