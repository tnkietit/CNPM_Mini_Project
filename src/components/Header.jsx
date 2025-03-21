import React, { useState } from "react";
import { FaBars, FaSearch, FaCommentDots, FaTimes, FaUser } from "react-icons/fa";
import "./Header.css";

function Header({ toggleSidebar, openFeedback, isSidebarOpen, onLogout }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUserClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header">
      {/* Nút toggle sidebar */}
      <button onClick={toggleSidebar} className="icon-btn">
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Các icon khác */}
      <div className={`icons-container ${isSidebarOpen ? "open" : ""}`}>
        <button onClick={openFeedback} className="icon-btn">
          <FaSearch />
        </button>
        <button onClick={openFeedback} className="icon-btn">
          <FaCommentDots />
        </button>
      </div>
      
    </div>
  );
}

export default Header;
