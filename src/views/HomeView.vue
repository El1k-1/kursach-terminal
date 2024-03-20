<script setup lang="ts"></script>

<template>
  <div class="home">
    <div class="home-item">
      <h3 style="font-weight: 500; font-size: 20px">Приветствую!</h3>
      <p>
        Это веб-приложение написанно для курсовой работы студента группы 4ПКС-35 Игнатова Никиты
      </p>
    </div>
    <div class="home-item">
      <router-link to="/">Главная</router-link>
      <router-link to="/terminal">Терминал</router-link>
      <router-link to="/about">Информация</router-link>
    </div>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.home-item {
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
}
</style>
