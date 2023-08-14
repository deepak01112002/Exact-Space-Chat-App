import React, { useState } from "react";


const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showMentionList, setShowMentionList] = useState(false);

  const usernames = ["Deepak", "Pallavi", "Rambha","Rajesh"];

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setMessage(inputValue);
    setShowMentionList(inputValue.endsWith("@"));
  };

  const handleMentionClick = (username) => {
    setMessage(message.replace("@",`@${username} `));
    setShowMentionList(false);
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
      />
      {showMentionList && (
        <div className="mention-list">
          {usernames.map((username) => (
            <div key={username} onClick={() => handleMentionClick(username)}>
              {username}
            </div>
          ))}
        </div>
      )}
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
