import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chatbox from "../components/Chatbox";
import FeedbackForm from "../components/FeedbackForm";
import UserMenu from "../components/UserMenu";
import ListSubject from "../components/ListSubject";
import "./MainInterface.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [messages, setMessages] = useState([]);

  const subjects = [
    "Triết học Mác – Lê-nin",
    "Kinh tế chính trị Mác – Lê-nint Lý",
    "Chủ nghĩa xã hội khoa học Học",
    "Lịch sử Đảng",
  ];

  // Xử lý gửi tin nhắn
  const handleSendMessage = (message) => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Bot trả lời: " + message, sender: "bot" },
        ]);
      }, 1000);
    }
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    console.log("Đăng xuất");
    // Thêm logic đăng xuất nếu cần
  };

  return (
    <div className="app">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        openFeedback={() => setFeedbackOpen(true)}
      />

      {/* Vùng nội dung chính */}
      <div className={`main ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        {/* UserMenu ở góc trên bên phải */}
        <div className="user-menu-wrapper">
          <UserMenu onLogout={handleLogout} />
        </div>

        {/* Chatbox */}
        <Chatbox
          isSidebarOpen={isSidebarOpen}
          messages={messages}
          onSendMessage={handleSendMessage}
        />

        {/* Container cho dropdown (ListSubject) */}
        <div className={`chat-controls ${isSidebarOpen ? "open" : "closed"}`}>
          <ListSubject
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            subjects={subjects}
          />
        </div>
      </div>

      {isFeedbackOpen && <FeedbackForm closeFeedback={() => setFeedbackOpen(false)} />}
    </div>
  );
}

export default App;
