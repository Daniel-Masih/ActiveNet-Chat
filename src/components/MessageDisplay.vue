<template>
    <div class="message-display">
      <div v-for="message in messages.slice().reverse()" :key="message.id" class="message" :class="{ 'outgoing': message.isOutgoing }">
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
    height: calc(100vh - 120px); /* Take up remaining space */
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse; /* Start from the bottom */
    gap: 10px;
    scrollbar-width: thin;
    scrollbar-color: #888 #ffffff00; /* Custom scrollbar styles */
  }
  
  
.message {
  width: 70%; /* set a fixed width for all message bubbles */
  min-width: 100px; /* you can set a minimum width to ensure short messages do not look too small */
  max-width: 300px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  line-height: 1.4;
  position: relative;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 18px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  background-color: #f4f4f8;
  transform: scale(0);
  animation: popIn 0.3s forwards;
  display: inline-block; /* ensure that the bubble sizes to the content width */
  vertical-align: top; /* align to the top if in a wrapping container */
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

.message.outgoing {
  background-color: #007bff;
  color: white;
  margin-left: auto; /* Align to the right */
}

.message::after { /* Add tail effect to messages */
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px; /* Adjust as needed for the size of the tail */
  border-color: transparent transparent transparent #f4f4f8; /* Match bubble background */
}

.message.outgoing::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px; /* Adjust as needed for the size of the tail */
  border-color: transparent #007bff transparent transparent; /* Match outgoing bubble background */
}

  .outgoing {
    background-color: #ddf;
    align-self: flex-end;
  }
  </style>
  