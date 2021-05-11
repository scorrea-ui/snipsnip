<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form ref="form" v-model="isValid">
          <v-text-field
            :label="$t('snippetName')"
            v-model="form.title"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            :label="$t('snippetDescription')"
            v-model="form.description"
          ></v-text-field>
          <v-autocomplete
            :items="languages"
            item-text="value"
            item-value="language"
            :label="$t('language')"
            v-model="form.language"
            :rules="[rules.required]"
            auto-select-first
            chips
            clearable
            deletable-chips
          ></v-autocomplete>
          <v-textarea
            :label="$t('snippetCode')"
            auto-grow
            v-model="form.code"
            :rules="[rules.required]"
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
      isValid: false,
      rules: {
        required: (value: string) => !!value || "Required.",
      },
    };
  },
  methods: {
    ...mapActions(["submitCode"]),
  },
  watch: {
    isValid() {
      this.$emit("validate", this.isValid);
    },
  },
});
</script>