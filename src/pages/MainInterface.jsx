import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chatbox from "../components/Chatbox";
import FeedbackForm from "../components/FeedbackForm";
import "./MainInterface.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [messages, setMessages] = useState([]); // Lưu danh sách tin nhắn

  const subjects = ["Triết học Mác – Lê-nin", "Kinh tế chính trị Mác – Lê-nint Lý", "Chủ nghĩa xã hội khoa học Học", "Lịch sử Đảng"];

  // Hàm xử lý gửi tin nhắn
  const handleSendMessage = (message) => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      // Giả lập tin nhắn phản hồi từ bot
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Bot trả lời: " + message, sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <div className="app">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        openFeedback={() => setFeedbackOpen(true)}
      />
      <div className={`main ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <Chatbox isSidebarOpen={isSidebarOpen} messages={messages} onSendMessage={handleSendMessage} />
        
        <div className={`chat-controls ${isSidebarOpen ? "open" : ""}`}>
          <select
            className="subject-dropdown"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Danh sách môn học</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>
      {isFeedbackOpen && <FeedbackForm closeFeedback={() => setFeedbackOpen(false)} />}
    </div>
  );
}

export default App;
