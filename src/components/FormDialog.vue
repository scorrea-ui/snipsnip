<template>
  <v-dialog
    v-model="openDialog"
    max-width="600px"
    @click:outside="$emit('close')"
    @keydown.esc="$emit('close')"
  >
    <v-card>
      <Form :form="form" />
      <v-btn color="blue darken-1" text @click="$emit('close')"> Close </v-btn>
      <v-btn color="blue darken-1" text @click="$emit('save')"> Save </v-btn>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "./Form.vue";

export default Vue.extend({
  components: {
    Form,
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
});
</script>