import React from "react";
import "./chat.css";
import Nav from "../nav/Nav";
import ChatBody from "../chatBody/chatBody";

function Chat() {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default Chat;