<template>
  <v-overlay :value="openDialog">
    <v-dialog
      v-model="openDialog"
      max-width="600px"
      @click:outside="$emit('close')"
      @keydown.esc="$emit('close')"
    >
      <v-card class="py-8 px-4">
        <Form :form="form" @validate="checkIfFormValid" />
        <v-btn color="red" text @click="$emit('close')"> Discard </v-btn>
        <v-btn
          color="indigo"
          text
          @click="$emit('save')"
          :disabled="!isFormValid"
        >
          Save
        </v-btn>
      </v-card>
    </v-dialog>
  </v-overlay>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "./Form.vue";

export default Vue.extend({
  components: {
    Form,
  },
  data() {
    return {
      isFormValid: false,
    };
  },
  props: {
    openDialog: {
      type: Boolean,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
  },
  methods: {
    checkIfFormValid(valid: boolean) {
      this.isFormValid = valid;
    },
  },
});
</script>