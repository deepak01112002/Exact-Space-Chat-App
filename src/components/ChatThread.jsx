import React from "react";

const ChatThread = ({ messages, randomUsername }) => {
  return (
    <div className="chat-thread">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.username === randomUsername ? "user-message" : "other-user-message"
          }`}
        >
          {message.username !== randomUsername && (
            <p className="username">{message.username}</p>
          )}
          <div className="message-content">
            <p>{message.text}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatThread;
