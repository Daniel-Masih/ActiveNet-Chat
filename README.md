Instructions for Configuring OpenAI API Keys, Assistant ID, and Vector Store ID
steps to configure the program with your own OpenAI API keys, Assistant ID, and Vector Store ID.
Step 1: Obtain OpenAI API Key and Assistant ID
1.	Create an OpenAI Account:
•	Go to the OpenAI website and sign up for an account.
2.	Generate an API Key:
•	Log in to your OpenAI account.
•	Navigate to the API keys section in your account dashboard.
•	Click on "Create New Key" to generate a new API key.
•	Copy the API key and store it securely.
3.	Create an Assistant:
•	In your OpenAI account dashboard, find the section for creating an assistant.
•	Create a new assistant and note down the Assistant ID provided.
•	You will need to enable the file search tool
Step 2: Set Up a Vector Store
1.	Set Up Vector Store:
•	Set up a vector store using OpenAI's tools 
•	Upload your .txt file which contains the knowledge base
•	Obtain the Vector Store ID from the setup process.
Step 3: Configure the Environment Variables
1.	Locate the Program's Configuration File:
•	The program uses environment variables stored in a file named .env. This file should be located in the root directory of the program.
2.	Edit the .env File:
•	Open the .env file with a text editor 
•	You will see placeholders for the API key, Assistant ID, and Vector Store ID.
3.	Replace Placeholder Values:
•	Replace the placeholder values with your own OpenAI API key, Assistant ID, and Vector Store ID.
For example, your .env file should look like this:

VITE_OPENAI_API_KEY=your-api-key-here 
VITE_OPENAI_ASSISTANT_ID=your-assistant-id-here 
VITE_VECTOR_STORE_ID=your-vector-store-id-here 

Replace your-api-key-here, your-assistant-id-here, and your-vector-store-id-here with the actual values you obtained in Steps 1 and 2.
Step 4: Run the Program
1.	Ensure Environment Variables Are Loaded:
•	Make sure that the program is set up to load environment variables from the .env file. This is usually handled automatically by the development environment.
2.	Start the Program:
•	Open a terminal or command prompt.
•	Navigate to the root directory of the program.
•	Run the command in terminal to start the program:
npm run dev
and in a new terminal navigate to the root directory again and run the command: 
npm start
this will launch the program in a new window with electron
3.	Verify the Setup:
•	After starting the program, ensure it runs correctly and can communicate with the OpenAI API.
•	If everything is set up correctly, the program should function as intended, using your OpenAI API key, Assistant ID, and Vector Store ID.
Step 5: Secure and Manage Your Keys
1.	Store Keys Securely:
•	Ensure that the API key, Assistant ID, and Vector Store ID are stored securely and not exposed in your codebase or version control system.
2.	Rotate Keys Regularly:
•	For security purposes, consider rotating your API keys periodically and updating the .env file with the new keys.

Detailed Steps to Build for Windows
1.	Install Node.js and Git: Ensure you have Node.js and Git installed on your Windows machine. You can download and install them from:
•	Node.js
•	Git
2.	Clone Your Repository: Open Command Prompt or PowerShell and clone your repository to the Windows machine.
git clone https://github.com/Daniel-Masih/ActiveNet-Chat.git
Clean Previous Builds: Remove any previous builds to ensure a clean start.
rd /s /q dist node_modules 
npm install 
3.	Build the Vite Project: Build your Vite project. This step compiles your Vue code and outputs it to the dist directory.
npm run build 
4.	Package the Electron App: Package your Electron app using Electron Builder. This step will create an executable for Windows.
npm run electron:build 

Expected Output
After running these steps, you should find the Windows executable in the dist directory. The structure of the dist directory:
•	win-unpacked/: Contains the unpacked version of your application.
•	YourAppName Setup 1.0.0.exe: This is the installer for your application.



Let's start by examining the main configuration files and directories that are important in a Vue.js project. We'll go through each of the following files one by one:
1.	package.json
2.	vite.config.js
3.	main.js
4.	src directory

Explanation of package.json
•	name: The name of the project is "ActiveNet Chat".
•	private: Indicates that this project is private and should not be published to a public registry.
•	version: The current version of the project is "1.0.0".
•	description: Currently empty, but typically used to describe the project.
•	main: Specifies the entry point for the application, which is "main.js".
•	scripts: Defines a set of commands that can be run to manage the project:
•	start: Runs the application in development mode using Electron.
•	dev: Starts the Vite development server.
•	build: Builds the project for production.
•	preview: Previews the production build.
•	electron:start: Starts the Electron application.
•	dependencies: Lists the project's runtime dependencies:
•	axios: A promise-based HTTP client.
•	openai: The OpenAI API client.
•	vue: The Vue.js framework.
•	devDependencies: Lists the project's development dependencies:
•	@vitejs/plugin-vue: Vue plugin for Vite.
•	cross-env: A utility for setting environment variables across platforms.
•	electron: The Electron framework for building desktop applications.
•	vite: The Vite build tool.
•	type: Specifies that the module type for the project is "module".

Explanation of vite.config.js
•	Imports:
•	defineConfig from vite: A utility function to define Vite configuration.
•	vue from @vitejs/plugin-vue: The Vue plugin for Vite.
•	path from path: A Node.js module for working with file and directory paths.
•	Configuration:
•	plugins: An array that includes the Vue plugin for Vite.
•	resolve:
•	alias: Defines path aliases for the project. Here, the alias @ is mapped to the src directory. This allows for simplified import statements in the code, such as import MyComponent from '@/components/MyComponent.vue';.

The main.js file is the entry point for the Electron application. It is responsible for setting up and launching the application window. The file imports necessary modules from Electron and Node.js, checks if the application is running in development mode, and creates a browser window to load the application. The createWindow function handles the creation and configuration of the application window, including loading the appropriate URL (development server or built index.html) and opening developer tools. Event listeners ensure the application behaves correctly across different operating systems, particularly handling window closures and reactivation on macOS.

Explanation of main.js
•	Imports:
•	app and BrowserWindow from electron: These are core modules of Electron for creating and managing application windows.
•	path from path: A Node.js module for handling file paths.
•	createRequire from module: A function to create a require function for loading modules.
•	fileURLToPath from url: A function to convert a file URL to a file path.
•	Constants:
•	__dirname: The directory name of the current module file.
•	require: A function to load modules using the CommonJS require.
•	isDev: A boolean that checks if the environment is development.
•	Functions:
•	createWindow(): Creates a new BrowserWindow instance with specified width, height, and web preferences. It loads the app's URL (either the Vite dev server in development or the built index.html in production). It also opens the developer tools.
•	Event Listeners:
•	app.whenReady().then(createWindow): Creates a window when the app is ready.
•	app.on('window-all-closed', ...): Quits the app when all windows are closed, except on macOS.
•	app.on('activate', ...): Recreates a window when the app is activated and there are no open windows (for macOS).

The src directory is where the main source code of the Vue.js application resides.
The src directory contains the following files and subdirectories:
•	App.vue
•	.DS_Store
•	main.js
•	components
•	style.css
•	assets
•	services

Summary of src Directory
The src directory is the main source folder for the Vue.js application. It typically includes:
•	App.vue: The root Vue component that serves as the main entry point for the component hierarchy.
•	main.js: The main JavaScript file for initializing the Vue instance and mounting the application.
•	components: A directory to store reusable Vue components.
•	style.css: A CSS file for global styles.
•	assets: A directory for static assets such as images.
•	services: A directory for service files, often used for API calls or other business logic.

Summary of App.vue
The App.vue file is the root component of the Vue.js application. It sets up the main structure and logic of the application, including handling user input and displaying messages.
•	Script Section:
•	Imports:
•	Vue's ref and watch functions for reactive state management.
•	MessageDisplay and MessageInput components.
•	sendMessage function from chatService.
•	Reactive State:
•	messages: A list of chat messages.
•	isLoading: A boolean indicating whether a message is being processed.
•	lastMessageId: A counter for unique message IDs.
•	messageReceived: A boolean to track if a new message has been received.
•	Functions:
•	handleSendMessage: Handles sending a message and updating the message list with responses from the chat service.
•	Watchers:
•	Watches messageReceived to reset it after a short delay, ensuring continuous operation.
•	Template Section:
•	Renders the MessageDisplay and MessageInput components.
•	Passes messages, isLoading, and messageReceived as props to these components.
•	Style Section:
•	Styles the main container to be vertically centered and constrained in width.




Summary of src/main.js
The main.js file in the src directory is responsible for bootstrapping the Vue.js application. It imports the necessary modules and mounts the root Vue component (App.vue) to a DOM element with the ID app.
•	Imports:
•	createApp from vue: The function to create a Vue application instance.
•	./style.css: Global CSS styles.
•	App from ./App.vue: The root Vue component.
•	createApp(App).mount('#app'):
•	Creates a new Vue application instance using the App component.
•	Mounts the application to the DOM element with the ID app.


Summary of components Directory
The components directory contains Vue components that are used to build the user interface of the application. Each file represents a reusable component with its own template, script, and style sections.

The components directory contains the following files:
•	MessageInput.vue
•	MessageDisplay.vue
•	ChatMessage.vue

Summary of MessageInput.vue
The MessageInput.vue component is responsible for handling user input for sending messages. It provides a text area for the user to type their message and a button to send the message.
•	Template Section:
•	Contains a div with the class input-container.
•	Includes a textarea bound to the message data property and listens for the enter key to trigger the handleSend method. The textarea is disabled when isLoading is true.
•	Includes a button that triggers the handleSend method when clicked. The button is disabled when isLoading is true.
•	Script Section:
•	Props:
•	isLoading: A boolean prop indicating if the application is processing a message.
•	messageReceived: A boolean prop indicating if a new message has been received.
•	Data:
•	message: A string for storing the user's input.
•	Watchers:
•	Watches messageReceived to focus the textarea when a new message is received.
•	Methods:
•	handleSend: Emits a send event with the message text and clears the textarea.
•	Style Section:
•	Styles the input container, textarea, and button to create a user-friendly interface.

Summary of MessageDisplay.vue
The MessageDisplay.vue component is responsible for displaying chat messages. It shows both outgoing and incoming messages, and includes a typing indicator when messages are being processed.
Template Section
•	<div class="message-display">: The container for the message display area.
•	<div v-if="isLoading" class="typing-indicator">: Shows a typing indicator when isLoading is true.
•	Contains three span elements with the class dot to create a dot-flashing animation.
•	<div v-for="message in sortedMessages" :key="message.id" :class="['message', { 'outgoing': message.isOutgoing, 'incoming': !message.isOutgoing }]">:
•	Iterates over sortedMessages to display each message.
•	Uses :key="message.id" to provide a unique key for each message.
•	Applies dynamic classes to distinguish between outgoing and incoming messages.
•	Displays the message text within a span.
Script Section
•	export default { ... }: Exports the component's options object.
•	name: 'MessageDisplay': Sets the component's name.
•	props:
•	messages: An array prop containing the list of messages to display.
•	isLoading: A boolean prop indicating if the application is processing a message.
•	computed:
•	sortedMessages:
•	A computed property that returns a reversed copy of the messages array, so the most recent messages are displayed at the bottom.

Style Section
•	.message-display:
•	padding: 20px: Adds padding inside the container.
•	height: calc(100vh - 120px): Sets the height to fill most of the viewport, accounting for other UI elements.
•	overflow-y: auto: Allows vertical scrolling if the content exceeds the height.
•	display: flex: Uses flexbox layout.
•	flex-direction: column-reverse: Reverses the order of children so the most recent messages appear at the bottom.
•	align-items: flex-start: Aligns incoming messages to the left.
•	.message:
•	min-width: 100px: Sets a minimum width.
•	max-width: 300px: Sets a maximum width.
•	overflow-wrap: break-word: Allows long words to break and wrap to the next line.
•	line-height: 1.4: Sets the line height.
•	font-size: 1rem: Sets the font size.
•	padding: 10px 15px: Adds padding inside the message bubble.
•	border-radius: 18px: Rounds the corners of the message bubble.
•	box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13): Adds a subtle shadow.
•	background-color: #E8FFD1: Sets the background color for incoming messages.
•	color: #213547: Sets the text color.
•	transform: scale(0): Initial scale for the animation.
•	animation: popIn 0.3s forwards: Applies the popIn animation.
•	display: inline-block: Displays as an inline block.
•	vertical-align: top: Aligns the message to the top.
•	text-align: left: Left-aligns the text.
•	.message.outgoing:
•	align-self: flex-end: Aligns outgoing messages to the right.
•	background-color: #57D9A3: Sets the background color for outgoing messages.
•	color: white: Sets the text color to white.
•	.message.incoming:
•	align-self: flex-start: Aligns incoming messages to the left.
•	.typing-indicator:
•	display: flex: Uses flexbox layout.
•	align-items: center: Vertically centers the dots.
•	font-size: 1.5rem: Sets the font size for the typing indicator.
•	color: #213547: Sets the color of the typing indicator.
•	.dot:
•	animation: dot-flashing 1s infinite linear alternate: Applies the dot-flashing animation.
•	font-size: 3rem: Sets the font size of the dots.
•	padding: 0 2px: Adds horizontal padding to the dots.
•	.dot:nth-child(1):
•	animation-delay: 0s: Sets the animation delay for the first dot.
•	.dot:nth-child(2):
•	animation-delay: 0.2s: Sets the animation delay for the second dot.
•	.dot:nth-child(3):
•	animation-delay: 0.4s: Sets the animation delay for the third dot.
•	@keyframes dot-flashing:
•	Defines the keyframes for the dot-flashing animation.
•	@keyframes popIn:
•	Defines the keyframes for the popIn animation.

Summary of chatService.js
The chatService.js file in the services directory is designed to facilitate communication with the OpenAI API for handling chat messages. This service allows the application to send user messages to OpenAI, create conversation threads, and receive responses from an AI assistant. The main functionalities include initializing the OpenAI client, sending messages, creating conversation threads, and retrieving assistant responses.
Detailed Documentation of chatService.js
Environment Variables
•	ASSISTANT_ID: The ID of the OpenAI assistant to be used for the chat.
•	API_KEY: The API key for authenticating requests to OpenAI.

const ASSISTANT_ID = import.meta.env.VITE_OPENAI_ASSISTANT_ID; const API_KEY = import.meta.env.VITE_OPENAI_API_KEY; 
Initializing the OpenAI Client
•	Creates an instance of the OpenAI client using the provided API key.

const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true }); 
Function: sendMessage
Purpose:
This function is responsible for sending a message to the OpenAI API, creating a conversation thread, handling the assistant's responses, and returning the content of the last assistant message.
Logging the Message and Assistant ID
•	Logs the message and the assistant ID to the console for debugging purposes.

console.log("Sending message with Assistant ID:", ASSISTANT_ID); console.log("Message: ", message); 
Creating a New Thread
•	Creates a new thread to handle the conversation. A thread is essentially a session that manages the flow of messages between the user and the assistant. It includes resources such as vector stores for file search.

const thread = await openai.beta.threads.create({ tool_resources: { "file_search": { "vector_store_ids": ["vs_vdnb0Y9R0NNRPKyqu7c04sx4"] } } }); 
Sending the User's Message
•	Sends the user's message to the newly created thread. The message is labeled with the role "user" to differentiate it from the assistant's messages.

await openai.beta.threads.messages.create(thread.id, { role: "user", content: message }); 
Running the Assistant
•	Runs the assistant using the thread with specific instructions. The instructions guide the assistant on how to respond to the user’s questions.

const run = await openai.beta.threads.runs.createAndPoll(thread.id, { assistant_id: ASSISTANT_ID, instructions: "Help the user with questions, do not bold any text or source your outputs. Always assume the user is already logged in" }); 
Checking the Run Status and Retrieving Messages
•	Checks if the run completed successfully. If it did, retrieves all messages from the thread, filters out only the messages from the assistant, and returns the content of the last assistant message. If no assistant messages are found or if there is an issue with the run, appropriate messages are logged and returned.

if (run.status === 'completed') { const messages = await openai.beta.threads.messages.list(run.thread_id); const lastMessage = messages.data.filter(m => m.role === 'assistant').pop(); if (lastMessage) { console.log('Latest Assistant Message:', lastMessage.content[0].text.value); return lastMessage.content[0].text.value; } else { console.log('No assistant messages found.'); return "No assistant response was found."; } } else { console.log('Run status:', run.status); return "There was an issue processing your conversation. Please try again."; } 
•	Run Status Check: If the run is successful, it retrieves all messages in the thread.
•	Filtering Messages: Filters the messages to find those from the assistant.
•	Returning Content: Returns the content of the last assistant message.
•	Error Handling: Logs and returns an error message if there are issues with the run or if no assistant messages are found.

