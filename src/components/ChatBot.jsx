// src/components/ChatBot.jsx
import React from 'react';
import './ChatBot.css';

const ChatBot = () => {
  return (
    <div className="chatbot-container">
      <div className="chatbot-header">🤖 Need Help?</div>
      <div className="chatbot-body">
        <p>Hi there! I'm your assistant.</p>
        <p>Ask me anything about this site.</p>
      </div>
    </div>
  );
};

export default ChatBot;
