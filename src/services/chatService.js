import OpenAI from "openai";

// Environment variables for the assistant ID and API key.
const ASSISTANT_ID = import.meta.env.VITE_OPENAI_ASSISTANT_ID;
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Initializing the OpenAI client with your API key.
const openai = new OpenAI({apiKey: API_KEY, dangerouslyAllowBrowser: true});

// Function to send a message to OpenAI and handle the response.
export const sendMessage = async (message) => {
  console.log("Sending message with Assistant ID:", ASSISTANT_ID);
  console.log("Message: ", message);

  // Create a new thread to handle the conversation.
  const thread = await openai.beta.threads.create({
    tool_resources: {
      "file_search": {
        "vector_store_ids": ["vs_vdnb0Y9R0NNRPKyqu7c04sx4"]
      }
    }
});

  // Send the user's message to the newly created thread.
  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: message
  });

  // Run the assistant using the thread, with specific instructions.
  const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
    assistant_id: ASSISTANT_ID,
    instructions: "Help the user"
  });

  // Check if the run completed successfully.
  if (run.status === 'completed') {
    // Retrieve all messages from the thread.
    const messages = await openai.beta.threads.messages.list(run.thread_id);

    // Filter only messages by the assistant and get the last message.
    const lastMessage = messages.data.filter(m => m.role === 'assistant').pop();

    // Check if there is an assistant message and return its content.
    if (lastMessage) {
      console.log('Latest Assistant Message:', lastMessage.content[0].text.value);
      return lastMessage.content[0].text.value;
    } else {
      console.log('No assistant messages found.');
      return "No assistant response was found.";
    }
  } else {
    // Log any statuses that indicate the run did not complete as expected.
    console.log('Run status:', run.status);
    return "There was an issue processing your conversation. Please try again.";
  }
};
