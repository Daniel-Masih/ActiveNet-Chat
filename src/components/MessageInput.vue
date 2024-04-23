<template>
    <div class="input-container">
      <input v-model="message" @keyup.enter="sendMessage" placeholder="Type a message..." type="text" />
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
          this.$emit('send', this.message);
          this.message = ''; // Clear the input after sending
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    padding: 10px;
  }
  
  input {
    flex-grow: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  