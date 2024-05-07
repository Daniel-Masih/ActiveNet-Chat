<template>
  <div class="input-container">
    <textarea ref="messageInput"
              v-model="message" 
              @keyup.enter="handleSend" 
              :disabled="isLoading"
              placeholder="Ask me about ActiveNet..."
              class="message-input" 
              rows="1"></textarea>
    <button @click="handleSend" :disabled="isLoading">Send</button>
  </div>
</template>


<script>
export default {
  name: 'MessageInput',
  props: {
    isLoading: Boolean,
    messageReceived: Boolean  // Prop to indicate a message has been received
  },
  data() {
    return {
      message: '',
    };
  },
  watch: {
    messageReceived(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.messageInput.focus();  // Focus the input field after update
        });
      }
    }
  },
  methods: {
    handleSend() {
      if (!this.message.trim()) return;
      this.$emit('send', { text: this.message.trim(), isOutgoing: true });
      this.message = '';  // Clear the message input after sending
    }
  }
}
</script>


<style scoped>
.input-container {
  display: flex;
  padding: 10px;
  border-radius: 20px;
  background-color: #E8FFD1;
  border-top: 1px solid #eee;
  align-items: center; /* Ensure vertical centering */
}
.message-input {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  color: #213547;
  background-color: #FFFFFF;
  border: 2px solid #57D9A3;
  border-radius: 18px;
  resize: none; /* Disable manual resize */
  min-height: 50px; /* Minimum height */
  overflow-y: auto; /* Allow scrolling inside the textarea */
  font-size: 1rem;
  outline: none; /* Remove default focus outline */
}
.message-input:focus {
  border-color: #45C28D; /* Focus state */
}
button {
  padding: 10px 20px;
  background-color: #57D9A3; /* Original button color */
  border: none;
  color: white;
  border-radius: 18px;
  font-size: 1rem;
  cursor: pointer;
}
button:hover {
  background-color: #45C28D;
}
button:disabled {
  background-color: #ccc; /* Disabled state */
}
</style>
