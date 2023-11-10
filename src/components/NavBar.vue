<script setup lang="ts">
import { useLogoutMutation } from "../api/mutations";
import {
getLogoutURLSessionStorage,
  getTokenSessionStorage,
} from "../services";
import { EnvConstants } from "../constants";

const { mutate } = useLogoutMutation();

const logout = () => {
  const token = getTokenSessionStorage();
  if (token) mutate({ token });
  
  const url = getLogoutURLSessionStorage();
  window.location.href = url || EnvConstants.URL_LOGIN;
};

</script>

<template>
  <div class="NavBar">
    <div class="NavBar__Icon">
      <img
        src="https://d2ra1qv4p9we6t.cloudfront.net/uploads/b45a8fe4-7369-46c1-937f-40e77314dade/original/invex-logo.svg"
        alt="Logo INVEX"
      />
    </div>
    <div class="NavBar__Profile">
      <div class="icons"></div>
      <div class="profile">
        <button v-on:click="logout">Cerrar sesión</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.NavBar {
  background-color: var(--color-red);
  width: 100%;
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.NavBar .NavBar__Icon {
  width: 120px;
}

.NavBar .NavBar__Icon img {
  width: 100%;
}

.NavBar .NavBar__Profile .profile button {
  color: #fff;
  background-color: transparent;
  cursor: pointer;
}
</style>
