import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Chatbox.css";

function Chatbox({ isSidebarOpen, messages, onSendMessage }) {
  const [inputMessage, setInputMessage] = useState("");

  const handleSendClick = () => {
    if (inputMessage.trim() !== "") {
      onSendMessage(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div className={`chatbox ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendClick()}
        />
        <button onClick={handleSendClick}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
