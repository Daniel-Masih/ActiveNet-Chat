<script setup>
import { ref } from 'vue';
import MessageDisplay from './components/MessageDisplay.vue';
import MessageInput from './components/MessageInput.vue';
import HelloWorld from './components/HelloWorld.vue';

const messages = ref([]);
const handleSendMessage = (newMessage) => {
  const message = {
    id: Date.now(),
    text: newMessage,
    isOutgoing: true // Assuming all messages sent from this interface are outgoing
  };
  messages.value.push(message);
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <HelloWorld msg="Vite + Vue" />
    <message-display :messages="messages"></message-display>
    <message-input @send="handleSendMessage"></message-input>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
