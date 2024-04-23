<template>
    <div class="message-display">
      <div v-for="message in messages" :key="message.id" class="message" :class="{ 'outgoing': message.isOutgoing }">
        <span>{{ message.text }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MessageDisplay',
    props: {
      messages: Array
    }
  }
  </script>
  
  <style scoped>
  .message-display {
    padding: 20px;
    overflow-y: scroll;
    height: 300px; /* Adjust based on your layout */
  }
  
  .message {
    padding: 10px;
    margin: 5px;
    background-color: #f4f4f8;
    border-radius: 8px;
  }
  
  .outgoing {
    background-color: #ddf;
    align-self: flex-end;
  }
  </style>
  