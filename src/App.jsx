import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import MainInterface from "./pages/MainInterface";
import "./App.css";

function App() {
  // Sử dụng state để theo dõi trạng thái đăng nhập
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kiểm tra trạng thái đăng nhập khi load lại trang
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  // Hàm xử lý khi đăng nhập thành công
  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  // Hàm xử lý khi đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Route đăng nhập */}
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />

        {/* Nếu đã đăng nhập thì hiển thị giao diện chính, nếu không thì chuyển hướng về trang đăng nhập */}
        <Route path="/*" element={isLoggedIn ? <MainInterface onLogout={handleLogout} /> : <Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
