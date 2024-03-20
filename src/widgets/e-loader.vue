<template>
  <div class="loader"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loader {
  position: relative;
  width: 5.5em;
  height: 5.5em;
  font-size: 16px;
}

.loader::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 100%;
  background: #fff;
  transform: translate(-50%, -50%) rotate(45deg);
  content: '';
}

.loader::after {
  position: absolute;
  bottom: 0.18em;
  left: 0.2em;
  width: 1em;
  height: 1em;
  background-color: #de3500;
  border-radius: 15%;
  animation: rolling-rock 2.5s cubic-bezier(0.79, 0, 0.47, 0.97) infinite;
  content: '';
}

@keyframes rolling-rock {
  0% {
    transform: translate(0, -1em) rotate(-45deg);
  }

  5% {
    transform: translate(0, -1em) rotate(-50deg);
  }

  20% {
    transform: translate(1em, -2em) rotate(47deg);
  }

  25% {
    transform: translate(1em, -2em) rotate(45deg);
  }

  30% {
    transform: translate(1em, -2em) rotate(40deg);
  }

  45% {
    transform: translate(2em, -3em) rotate(137deg);
  }

  50% {
    transform: translate(2em, -3em) rotate(135deg);
  }

  55% {
    transform: translate(2em, -3em) rotate(130deg);
  }

  70% {
    transform: translate(3em, -4em) rotate(217deg);
  }

  75% {
    transform: translate(3em, -4em) rotate(220deg);
  }

  100% {
    transform: translate(0, -1em) rotate(-225deg);
  }
}
</style>
