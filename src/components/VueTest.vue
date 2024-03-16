<template>
  <h1>Hello from Vue</h1>
  <Button label="Clicc" @click="doFetchStuff"></Button>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import { ref } from "vue";
import { trpc } from "../trpc/client";

const data = ref({});

async function doFetchStuff() {
  const result = await trpc.fetchStuff.query();
  data.value = result;
}
</script>
