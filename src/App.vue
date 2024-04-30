<script setup>
import { ref } from 'vue';
import MessageDisplay from './components/MessageDisplay.vue';
import MessageInput from './components/MessageInput.vue';

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
  <!-- Here we add the class name 'app-container' -->
  <div class="app-container"> 
    <message-display :messages="messages"></message-display>
    <message-input @send="handleSendMessage"></message-input>
  </div>
</template>

<style scoped>
/* Now we style the 'app-container' */
.app-container {
  display: flex;
  flex-direction: column;
  height: 90vh; /* Use the full viewport height */
  max-width: 700px; /* Adjust this value to set the maximum width of the app */
  margin: 0 auto; /* This will center your app in the middle of the page */
}
</style>
