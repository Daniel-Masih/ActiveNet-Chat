<script setup>
import { ref, watch } from 'vue';
import MessageDisplay from './components/MessageDisplay.vue';
import MessageInput from './components/MessageInput.vue';
import { sendMessage } from './services/chatService';

const messages = ref([]);
const isLoading = ref(false);
let lastMessageId = 0;
const messageReceived = ref(false); // New ref to track if a message was received

const handleSendMessage = async (messageObject) => {
  isLoading.value = true;
  lastMessageId++;
  messages.value.push({
    id: lastMessageId,
    text: messageObject.text,
    isOutgoing: messageObject.isOutgoing
  });

  try {
    const responseText = await sendMessage(messageObject.text);
    lastMessageId++;
    messages.value.push({
      id: lastMessageId,
      text: responseText,
      isOutgoing: false
    });
    isLoading.value = false;
    messageReceived.value = true; // Set to true when a response is received

    // Reset the messageReceived after it's set so it's ready for the next cycle
    setTimeout(() => {
      messageReceived.value = false;
    }, 100);

  } catch (error) {
    console.error('Error in fetching the response:', error);
    isLoading.value = false;
  }
};

// Watcher to reset messageReceived for continuous operation
watch(messageReceived, (newVal) => {
  if (!newVal) {
    messageReceived.value = false;
  }
});
</script>

<template>
  <div class="app-container">
    <message-display :messages="messages" :is-loading="isLoading"></message-display>
    <message-input @send="handleSendMessage" :is-loading="isLoading" :message-received="messageReceived"></message-input>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 90vh;
  max-width: 700px; /* Adjusted to make it narrower */
  margin: 0 auto; /* This will center your app on the page */
}
</style>
