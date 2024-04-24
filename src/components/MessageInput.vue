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

.message-input::-webkit-scrollbar {
  width: 10px; /* Adjust the width of the scrollbar */
}

.message-input::-webkit-scrollbar-track {
  background: transparent; /* Color of the track */
  border-radius: 12px; /* Optional: if you want rounded corners on the track */
}

.message-input::-webkit-scrollbar-thumb {
  background-color: #57D9A3; /* Color of the scrollbar thumb */
  border-radius: 12px; /* Rounded corners on the thumb */
  border: 2px solid #E8FFD1; /* Optional: if you want a border around the thumb */
}

button {
  padding: 10px 20px;
  background-color: #57D9A3;
  border: none;
  color: white;
  border-radius: 18px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #45C28D;
}
</style>

  