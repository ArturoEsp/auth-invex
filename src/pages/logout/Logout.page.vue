<script setup lang="ts">
import Loader from "../../components/Loader.vue";
import { EnvConstants } from "../../constants";
import { removeAllSessionStorage } from "../../services";

setTimeout(() => {
  removeAllSessionStorage();
  window.location.href = EnvConstants.URL_LOGIN;
}, 1900);

</script>

<template>
  <Loader v-if="true" />
</template>

<style scoped></style>
