<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>loading</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.replace('/error/404')
})
</script>

<route lang="json">
{
  "name": "Все",
  "meta": {
    "requiresAuth": false
  }
}
</route>
