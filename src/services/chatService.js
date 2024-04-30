import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
  }
});

export const sendMessage = async (message) => {
  try {
    const data = {
      model: "gpt-4-turbo", // Correct model ID for GPT-4 Turbo
      messages: [{
        role: "user",
        content: message
      }]
    };

    const response = await apiClient.post('/chat/completions', data); // Make sure to use the chat completions endpoint
    return response.data.choices[0].message.content; // Adjusted to match expected response structure
  } catch (error) {
    console.error('Failed to send message:', error);
    return "There was an error processing your request.";
  }
};
