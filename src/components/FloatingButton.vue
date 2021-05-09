<template>
  <v-container>
    <v-row justify="end" class="text-end">
      <v-col cols="12">
        <v-btn
          elevation="3"
          class="mx-2"
          fab
          dark
          color="indigo"
          @click="$emit('add')"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>