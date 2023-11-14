<script setup lang="ts">
import Loader from "../../components/Loader.vue";
import { EnvConstants } from "../../constants";
import { getLogoutURLSessionStorage, removeAllSessionStorage } from "../../services";

setTimeout(() => {
  removeAllSessionStorage();
  const url = getLogoutURLSessionStorage();
  window.location.href = url || EnvConstants.URL_LOGIN;
}, 1900);

</script>

<template>
  <Loader v-if="true" />
</template>

<style scoped></style>
