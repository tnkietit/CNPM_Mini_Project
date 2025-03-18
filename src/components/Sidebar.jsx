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

      {/* Phần nội dung sidebar luôn render, nhưng sẽ có hiệu ứng trượt ra khi mở */}
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
          {/* Nếu bạn muốn ẩn hoàn toàn các nút này khi sidebar đóng, 
              bạn có thể giữ chúng luôn render trong sidebar-content hoặc ẩn bằng CSS */}
          <button className="sidebar-item">Khám Phá GEA</button>
          <button className="sidebar-item">Đoạn Chat Mới</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
