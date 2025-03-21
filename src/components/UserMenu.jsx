import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./UserMenu.css";

function UserMenu({ onLogout, isSidebarOpen }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleUserClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogoutClick = () => {
    if (onLogout) onLogout();
    navigate("/login", { replace: true });
  };

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Inline style điều chỉnh độ dài của separator dựa trên isSidebarOpen
  const separatorStyle = isSidebarOpen
    ? { width: "calc(100% + 20px)", marginLeft: "-10px", marginRight: "-10px" }
    : { width: "calc(100% + 10px)", marginLeft: "-5px", marginRight: "-5px" };

  return (
    <div className={`user-menu-container ${isSidebarOpen ? "open" : "closed"}`} ref={containerRef}>
      <button onClick={handleUserClick} className="user-icon-btn">
        <FaUser className="user-icon" />
      </button>

      {/* Separator line với inline style */}
      <hr className="separator-line" style={separatorStyle} />

      {showDropdown && (
        <div className="user-dropdown">
          <button onClick={handleLogoutClick} className="dropdown-item">
            <FaSignOutAlt className="logout-icon" />
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
