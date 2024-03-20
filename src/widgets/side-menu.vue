<template>
  <aside>
    <router-link to="/">Главная</router-link>
    <router-link to="/auth">Войти</router-link>
    <router-link to="/uikit">UU Kit</router-link>
  </aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
aside {
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 320px;
  height: 100vh;
  padding: 24px;
}
</style>
