const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Predefined responses
const responses = {
  "hi": "Hi taj!, How can I help you?",
  "hello": "Hello! How can I help you?",
  "how are you": "I'm just a bot, but I'm doing great!",
  "what is your name": "I'm a simple AI chatbot!",
  "bye": "Goodbye! Have a nice day!"
};

// Function to handle sending a message
function sendMessage() {
  const userMessage = userInput.value.toLowerCase().trim();
  if (userMessage) {
    appendMessage(`You: ${userMessage}`, 'user');
    respondToMessage(userMessage);
    userInput.value = ''; // Clear input
  }
}

// Append messages to the chatbox
function appendMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to the bottom
}

// Respond to user message
function respondToMessage(message) {
  const botResponse = responses[message] || "I don't understand that. Can you try asking something else?";
  setTimeout(() => {
    appendMessage(`Bot: ${botResponse}`, 'bot');
  }, 1000); // Simulate a short delay
}

// Handle 'Enter' key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}
