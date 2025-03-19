import React from "react";
import { FaBars, FaTimes, FaSearch, FaCommentDots } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar({ isOpen, toggleSidebar, openFeedback }) {
  return (
    <div className="sidebar-container">
      {/* Nút toggle luôn hiển thị */}
      <button className="menu-btn" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Phần nội dung sidebar với hiệu ứng trượt khi mở */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="menu-icons-container">
          {/* Các icon tìm kiếm và feedback */}
          <div className="icons-wrapper">
            <button className="icon-btn">
              <FaSearch />
            </button>
            <button className="icon-btn" onClick={openFeedback}>
              <FaCommentDots />
            </button>
          </div>
        </div>

        <div className="sidebar-content">
          <button className="sidebar-item">Khám Phá GEA</button>
          <button className="sidebar-item chat-new">Đoạn Chat Mới</button>
          {/* Nếu muốn dùng pseudo-element cho hiệu ứng line, loại bỏ hr dưới đây */}
          {/* <hr className="sidebar-separator" /> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
