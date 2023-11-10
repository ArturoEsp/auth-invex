<script setup>
import { EnvConstants } from "../../constants";
const back = () => (window.location.href = EnvConstants.URL_LOGIN);
</script>

<template>
  <div class="NotFoundPage">
    <section class="error-container">
      <span>4</span>
      <span><span class="screen-reader-text">0</span></span>
      <span>4</span>
    </section>
    <p>
      Estás escribiendo mal la URL o solicitando una página que ya no está aquí.
    </p>
    <button v-on:click="back">Regresar al inicio</button>
  </div>
</template>

<style lang="css" scoped>
.NotFoundPage {
  background-color: var(--color-red);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  text-align: center;
}

.NotFoundPage p {
  color: #fff;
  font-size: 1.3rem;
}

.NotFoundPage button {
  border: 1px solid #fff;
  display: inline-block;
  width: auto;
  padding: 12px 18px;
  text-decoration: none;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}

.NotFoundPage button:hover {
  background-color: #fff;
  color: var(--color-red);
}

.error-container {
  text-align: center;
  font-size: 180px;
  font-family: "Catamaran", sans-serif;
  font-weight: 800;
}
.error-container > span {
  display: inline-block;
  line-height: 0.7;
  position: relative;
  color: #ffb485;
}
.error-container > span {
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.error-container > span:nth-of-type(1) {
  color: #d1f2a5;
  animation: colordancing 4s infinite;
}
.error-container > span:nth-of-type(3) {
  color: #f56991;
  animation: colordancing2 4s infinite;
}
.error-container > span:nth-of-type(2) {
  width: 120px;
  height: 120px;
  border-radius: 999px;
}
.error-container > span:nth-of-type(2):before,
.error-container > span:nth-of-type(2):after {
  border-radius: 0%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  border-radius: 999px;
  box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
    inset 0 30px 0 rgba(239, 250, 180, 0.4),
    inset -30px 0 0 rgba(255, 196, 140, 0.4),
    inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  animation: shadowsdancing 4s infinite;
}
.error-container > span:nth-of-type(2):before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}

.screen-reader-text {
  position: absolute;
  top: -9999em;
  left: -9999em;
}
@keyframes shadowsdancing {
  0% {
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
      inset 0 30px 0 rgba(239, 250, 180, 0.4),
      inset -30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  }
  25% {
    box-shadow: inset 30px 0 0 rgba(245, 105, 145, 0.4),
      inset 0 30px 0 rgba(209, 242, 165, 0.4),
      inset -30px 0 0 rgba(239, 250, 180, 0.4),
      inset 0 -30px 0 rgba(255, 196, 140, 0.4);
  }
  50% {
    box-shadow: inset 30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 30px 0 rgba(245, 105, 145, 0.4),
      inset -30px 0 0 rgba(209, 242, 165, 0.4),
      inset 0 -30px 0 rgba(239, 250, 180, 0.4);
  }
  75% {
    box-shadow: inset 30px 0 0 rgba(239, 250, 180, 0.4),
      inset 0 30px 0 rgba(255, 196, 140, 0.4),
      inset -30px 0 0 rgba(245, 105, 145, 0.4),
      inset 0 -30px 0 rgba(209, 242, 165, 0.4);
  }
  100% {
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
      inset 0 30px 0 rgba(239, 250, 180, 0.4),
      inset -30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  }
}
@keyframes colordancing {
  0% {
    color: #d1f2a5;
  }
  25% {
    color: #f56991;
  }
  50% {
    color: #ffc48c;
  }
  75% {
    color: #effab4;
  }
  100% {
    color: #d1f2a5;
  }
}
@keyframes colordancing2 {
  0% {
    color: #ffc48c;
  }
  25% {
    color: #effab4;
  }
  50% {
    color: #d1f2a5;
  }
  75% {
    color: #f56991;
  }
  100% {
    color: #ffc48c;
  }
}
</style>
