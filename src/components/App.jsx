import React, { useState } from "react";
import ChatThread from "./ChatThread";
import ChatInput from "./ChatInput";
import "../styles/App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const usernames = ["User1", "User2", "User3"];

  const handleSendMessage = (messageText) => {
    const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
    
    const newMessage = {
      text: messageText,
      username: randomUsername
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="app">
      <h1>Exact-Space Chat App</h1>
      <ChatThread messages={messages} usernames={usernames} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
