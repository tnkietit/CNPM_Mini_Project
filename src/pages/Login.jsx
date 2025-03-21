import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaSync } from "react-icons/fa";
import styles from "./Login.module.css";
import logo from "../img/Logo.png";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [captchaSrc, setCaptchaSrc] = useState(
    "https://miro.medium.com/v2/resize:fit:640/format:webp/1*MHqIWdansPvRMEmUK2KNPw.png"
  );

  const navigate = useNavigate();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const reloadCaptcha = (e) => {
    e.preventDefault();
    setCaptchaSrc(`${captchaSrc}?rand=${Math.random()}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2 className={styles.loginTitle}>Đăng nhập</h2>
          <form onSubmit={handleSubmit}>
            <label className={styles.inputLabel}>Username/Email</label>
            <div className={styles.inputGroup}>
              <FaUser className={styles.inputIcon} />
              <input
                type="text"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <label className={styles.inputLabel}>Password</label>
            <div className={styles.inputGroup}>
              <FaLock className={styles.inputIcon} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className={styles.passwordToggle} onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className={styles.rememberMe}>
              <label htmlFor="rememberMe">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Nhớ mật khẩu
              </label>
            </div>

            <label className={styles.inputLabel}>Mã captcha</label>
            <div className={styles.captchaContainer}>
              <input
                type="text"
                className={styles.captchaInput}
                placeholder="Nhập captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
              />
              <img src={captchaSrc} alt="captcha" className={styles.captchaImg} />
              <button className={styles.reloadButton} onClick={reloadCaptcha}>
                <FaSync />
              </button>
            </div>

            <button type="submit" className={styles.loginButton}>
              Đăng nhập
            </button>
          </form>
          <a href="/forgot-password" className={styles.forgotPassword}>
              Quên mật khẩu?
          </a>
        </div>

        <div className={styles.welcomeBox}>
          <img src={logo} alt="Logo" className={styles.welcomeLogo} />
          <h2>Chào mừng trở lại!</h2>
          <p>Đăng nhập để tiếp tục</p>
          <div className={styles.links}>
            <a href="#">Đăng ký</a> | <a href="/forgot-password" className={styles.forgotPassword}>Quên mật khẩu?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
