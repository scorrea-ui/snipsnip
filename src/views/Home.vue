<template>
  <div class="my-10">
    <div v-if="snippets.length === 0">
      <h1>Seems you have not added any code snippets</h1>
      <v-img
        max-height="400px"
        contain
        :src="require('@/assets/code.png')"
      ></v-img>
    </div>
    <FormDialog
      :form="addFormData"
      :openDialog="openAddFormDialog"
      @close="closeAddDialog"
      @save="saveCode"
    />
    <FormDialog
      :form="editFormData"
      :openDialog="openEditFormDialog"
      @close="closeEditDialog"
      @save="updateCode"
    />
    <div v-for="snippet in snippets" :key="snippet.id">
      <Card
        :id="snippet.id"
        :title="snippet.title"
        :language="snippet.language"
        :description="snippet.description"
        :code="snippet.code"
        @edit="editItem"
        @delete="delCode"
      />
    </div>
    <FloatingButton @add="openAddDialog" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormDialog from "../components/FormDialog.vue";
import Card from "../components/Card.vue";
import { mapActions, mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";
import FloatingButton from "@/components/FloatingButton.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Card,
    FormDialog,
    FloatingButton,
  },
  data() {
    return {
      page: 1,
      openAddFormDialog: false,
      openEditFormDialog: false,
      editFormData: {},
      addFormData: {
        id: uuidv4(),
        name: "",
        description: "",
        language: "",
        code: "",
      },
    };
  },
  computed: mapState({
    snippets: "snippets",
  }),
  methods: {
    ...mapActions(["editCode", "submitCode", "deleteCode"]),
    editItem(item: Record<string, string>) {
      this.editFormData = item;
      this.openEditDialog();
    },
    closeEditDialog() {
      this.openEditFormDialog = false;
    },
    openEditDialog() {
      this.openEditFormDialog = true;
    },
    openAddDialog() {
      this.openAddFormDialog = true;
    },
    closeAddDialog() {
      this.openAddFormDialog = false;
    },
    saveCode() {
      this.submitCode(this.addFormData);
      this.openAddFormDialog = false;
    },
    updateCode() {
      this.editCode(this.editFormData);
      this.openEditFormDialog = false;
    },
    delCode(id: string) {
      this.deleteCode(id);
    },
  },
});
</script>


<style lang="scss" scoped>
h1 {
  text-align: center;
  margin: 24px 0;
}
</style>