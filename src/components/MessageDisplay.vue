<template>
  <div class="message-display">
    <div v-if="isLoading" class="typing-indicator">
      <span class="dot">.</span>
      <span class="dot">.</span>
      <span class="dot">.</span>
    </div>
    <div v-for="message in sortedMessages" :key="message.id"
         :class="['message', { 'outgoing': message.isOutgoing, 'incoming': !message.isOutgoing }]">
      <span>{{ message.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageDisplay',
  props: {
    messages: Array,
    isLoading: Boolean
  },
  computed: {
    sortedMessages() {
      return [...this.messages].reverse();
    }
  }
}
</script>

<style scoped>
.message-display {
  padding: 20px;
  height: calc(100vh - 120px);
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start; /* Start alignment for incoming messages */
}

.message {
  min-width: 100px;
  max-width: 300px;
  overflow-wrap: break-word;
  line-height: 1.4;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 18px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  background-color: #E8FFD1;
  color: #213547;
  transform: scale(0);
  animation: popIn 0.3s forwards;
  display: inline-block;
  vertical-align: top;
  text-align: left; /* Left-align text */
}

.message.outgoing {
  align-self: flex-end; /* Align outgoing messages to the right */
  background-color: #57D9A3;
  color: white;
}

.message.incoming {
  align-self: flex-start; /* Align incoming messages to the left */
}

.loading {
  font-style: italic;
  color: #213547; /* This should make it visible. Check if this color blends with the background. */
  font-size: 1rem; /* Ensuring it's not too small. */
}
.typing-indicator {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #213547;
}

.dot {
  animation: dot-flashing 1s infinite linear alternate;
  font-size: 3rem;
  padding: 0 2px;
}

.dot:nth-child(1) { animation-delay: 0s; }
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes dot-flashing {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes popIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
