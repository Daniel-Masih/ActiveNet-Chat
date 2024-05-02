<template>
  <div class="message-display">
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
    messages: Array // Accepts messages from the parent
  },
  computed: {
    sortedMessages() {
      return this.messages.slice().reverse(); // This will ensure messages are displayed in reverse order
    }
  },
  mounted() {
    // this.fetchMessages(); // Calls the fetchMessages method when the component mounts
  },
  methods: {
    fetchMessages() {
      const data = {
        model: "gpt-4-turbo",
        messages: [{role: "user", content: "Hello, how can I help?"}]
      };

      fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.choices && data.choices.length > 0) {
          const apiMessages = data.choices.map(choice => ({
            text: choice.message.content,
            isOutgoing: false, // Ensures responses are considered incoming
            id: Date.now() + Math.random() // Ensures a unique key
          }));
          this.messages.push(...apiMessages);
        }
      })
      .catch(error => console.error('Error fetching messages:', error));
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
}

.message.outgoing {
  align-self: flex-end; /* Align outgoing messages to the right */
  background-color: #57D9A3;
  color: white;
}

.message.incoming {
  align-self: flex-start; /* Align incoming messages to the left */
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
