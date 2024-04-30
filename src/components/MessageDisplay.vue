<template>
  <div class="message-display">
    <div v-for="message in messages.slice().reverse()" :key="message.id"
         class="message" :class="{ 'outgoing': message.isOutgoing }">
      <span>{{ message.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageDisplay',
  data() {
    return {
      messages: []  // This will hold our messages after fetching and parsing
    };
  },
  mounted() {
    this.fetchMessages();  // Call the fetchMessages method when the component mounts
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
    console.log('API Response:', data);  // Log the full response to see its structure
    if (data.choices && data.choices.length > 0) {
      const messages = data.choices.map(choice => ({
        text: choice.message.content, // Assuming 'message.content' is a typo and it should be 'choice.text'
        isOutgoing: false, // Assume all responses from the API are not outgoing
        id: Math.random().toString(36).substring(7) // Generate a pseudo-unique ID for React keys
      }));
      this.messages = messages;
    } else {
      console.error('Unexpected API response structure:', data);
    }
  })
  .catch(error => {
    console.error('Error calling OpenAI API:', error);
  });
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
  align-items: flex-start; /* Ensure alignment starts from the left */
  gap: 10px;
  scrollbar-width: thin;
  scrollbar-color: #57D9A3 #E8FFD1;
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
  margin: 5px 0; /* Uniform margin for all messages */
}

.message.outgoing {
  align-self: flex-end; /* Align outgoing messages to the right */
  background-color: #57D9A3;
  color: white;
  margin: 5px; /* Adjust as needed */
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
