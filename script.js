const messages = [
    "Hello! I'm My Hayat, your mental health companion. How are you feeling today?",
    "I'm here to listen and support you. Would you like to talk about what's on your mind?",
    "Remember, you're not alone in this journey. I'm here to help you process your thoughts and feelings.",
    "Your feelings are valid. Let's explore them together.",
    "It's okay to not be okay. Would you like to tell me more about what's troubling you?"
];

let messageIndex = 0;

function addMessage(text, isUser = false) {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, true);
        input.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            addMessage(messages[messageIndex]);
            messageIndex = (messageIndex + 1) % messages.length;
        }, 1000);
    }
}

// Add initial bot message
setTimeout(() => {
    addMessage(messages[0]);
    messageIndex = 1;
}, 500);

// Handle enter key
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});