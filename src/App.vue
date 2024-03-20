<template>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import eLoader from './widgets/e-loader.vue'
</script>

<style scoped>
.main-wrapper {
  display: flex;
  margin: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.page-wrapper {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-height: 100vh;
  margin-left: 320px;
  padding: 24px 184px 0;
}

.page-loader {
  position: fixed;
  inset: 0 0 0 320px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(0 0 0 / 40%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.page-loader[isLoading='true'] {
  opacity: 1;
  transition: opacity 2s ease-out;
  pointer-events: all;
}
</style>
