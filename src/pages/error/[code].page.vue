<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-h3 mb-1">
    {{ (route.params as RouteParams)?.code }}
  </div>
  <div class="text-h4 mb-1">
    {{ text }}
  </div>
  <div class="text-h6 mb-3">Обратитесь к администратору</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, type RouteParams } from 'vue-router'

const route = useRoute()
const codeToText: Record<string, string> = {
  '401': 'Для начала нужно авторизоваться',
  '403': 'У вас нет доступа',
  '404': 'Страница не найдена',
  '503': 'Сервис временно недоступен'
}
const text = ref<string>(
  codeToText[Number((route.params as RouteParams)?.code)] || 'Неизвестная ошибка'
)
</script>

<style lang="scss" scoped>
.connected-status {
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>

<route lang="json">
{
  "name": "Ошибка",
  "meta": {
    "requiresAuth": false
  }
}
</route>
