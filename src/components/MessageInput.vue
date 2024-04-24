<template>
    <div class="input-container">
      <textarea v-model="message" @keyup.enter="sendMessage" placeholder="Ask me about ActiveNet!" class="message-input" rows="1"></textarea>
      <button @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MessageInput',
    data() {
      return {
        message: ''
      };
    },
    methods: {
      sendMessage() {
        if (this.message.trim()) {
          // Prevent newline from being added after hitting enter
          event.preventDefault();
          this.$emit('send', this.message.trim());
          this.message = ''; // Clear the textarea after sending
        }
      }
    }
  }
  </script>
  
  <style scoped>
.input-container {
  display: flex;
  padding: 10px;
  background-color: white;
  border-top: 1px solid #eee;
  align-items: center; /* Ensure vertical centering */
}

.message-input {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #007bff;
  border-radius: 18px;
  resize: none; /* Disable manual resize */
  min-height: 50px; /* Minimum height */
  overflow-y: auto; /* Allow scrolling inside the textarea */
  font-size: 1rem;
  outline: none; /* Remove default focus outline */
}

.message-input:focus {
  border-color: #0056b3; /* Focus state */
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 18px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

  