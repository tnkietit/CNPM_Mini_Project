import React from "react";
import { FaBars, FaSearch, FaCommentDots, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header({ toggleSidebar, openFeedback, isSidebarOpen }) {
  return (
    <div className="header">
      <button onClick={toggleSidebar} className="icon-btn">
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
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
