import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      text: "Hi! I'm your AI assistant. Ask me anything about skills, projects, or experience!",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setChat([
      ...chat,
      {
        text: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);

    setMessage("");
  };

  return (
    <div className="chatbot-container">

      {/* Chat Window */}
      {open && (
        <div className="chatbox">
          <div className="chat-header">
            <h3>AI Assistant</h3>
            <p>Ask me anything</p>
          </div>

          <div className="chat-body">
            {chat.map((msg, i) => (
              <div key={i} className="chat-message">
                <p>{msg.text}</p>
                <span>{msg.time}</span>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button className="chat-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaRobot />}
      </button>
    </div>
  );
}