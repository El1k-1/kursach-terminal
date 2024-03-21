<!-- eslint-disable vue/multi-word-component-names -->
<script type="module" setup lang="ts">
import { json } from 'stream/consumers'
import vue, { PropType } from 'vue'

const ws = new WebSocket('ws://127.0.0.1:8000')

ws.onopen = () => {
  console.log('Подключение выполнено')
}

ws.onmessage = (message) => {
  const { type, value } = JSON.parse(message.data)
  if (type == 'res') {
    terminalField.value = '%'
    terminalHistory.value?.push({ id: Date.now(), field: value })
    terminalField.value = ''
  }
  console.log(type + value)
}

const terminalHistory = defineModel({
  type: Array as PropType<{ id: number; field: string }[]>
})

const terminalField = defineModel('field', {
  type: String,
  default() {
    return ''
  }
})

terminalHistory.value = [{ id: 0, field: 'Терминал сделал студент группы 4ПКС-35 Игнатов Никита' }]

function userEnter(payload: KeyboardEvent) {
  console.log(terminalField.value)

  terminalHistory.value?.push({ id: Date.now(), field: terminalField.value })

  ws.send(JSON.stringify({ type: 'req', value: terminalField.value }))
  terminalField.value = ''
}
</script>

<template>
  <div class="terminal-wrapper">
    <div class="home-item">
      <h1 style="font-weight: 500; font-size: 26px">SSH Терминал</h1>
      <router-link to="/">К главной странице</router-link>
    </div>
    <main id="container">
      <div class="elements-wrapper">
        <p
          v-for="field in terminalHistory"
          :cterminalHistory="terminalHistory"
          :key="field.id"
          class="terminal-field"
        >
          {{ field.field }}
        </p>
        <textarea
          id="terminal-bar"
          autofocus
          spellcheck="false"
          type="text"
          @keyup.enter="userEnter"
          v-model="terminalField"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');

#terminal-bar {
  background: none;
  border: none;
  font-family: 'Ubuntu Mono';
  color: var(--color-text);
  text-decoration: none;
  font-size: 16px;
  height: max-content;
  padding: 0;
  resize: none;
}

.elements-wrapper {
  display: flex;
  flex-direction: column;
  border: 0px;
  width: 100%;
  background: rgba(56, 4, 40, 0.9);
  font-family: 'Ubuntu Mono';
  height: calc(100% - 30px);
  padding-top: 2px;
  margin-top: -1px;
  padding: 8px;
}

.home-item {
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
}

body {
  background: linear-gradient(45deg, #57003f 0%, #f57453 100%);
  font-family: Ubuntu;
}

#terminal-bar:focus {
  outline: none;
}

#terminal-bar button {
  border: 0px;
}

.terminal-wrapper {
  display: flex;
  width: 1080px;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
}

#container {
  display: flex;
  width: 100%;
  height: 600px;
  flex-direction: column;
  padding: 24px 8px 8px 8px;
  background-color: #57003f;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(#504b45 0%, #3c3b37 100%);
}
</style>
