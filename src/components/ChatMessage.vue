<template>
    <div class="message">
      <p>{{ text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatMessage',
    props: {
      text: String
    }
  }
  </script>
  
  <style scoped>
  .message {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  