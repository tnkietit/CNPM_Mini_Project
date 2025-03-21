import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaSync } from "react-icons/fa";
import styles from "./Login.module.css";
import logo from "/src/img/Logoz.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaSrc, setCaptchaSrc] = useState("https://miro.medium.com/v2/resize:fit:640/format:webp/1*MHqIWdansPvRMEmUK2KNPw.png");
  
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
    if (username.trim() && password.trim() && captcha.trim()) {
      // Thực hiện xác thực đăng nhập ở đây
      console.log("Login attempt:", { username, password, captcha });
      // Giả lập đăng nhập thành công
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    }
  };
  
  return (
    <div className={styles["login-wrapper"]}>
      <div className={styles["login-container"]}>
        <div className={styles["login-form-section"]}>
          <h2 className={styles["login-title"]}>Đăng nhập</h2>
          
          <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <div className={styles["form-group"]}>
              <div className={styles["input-label"]}>Username/Email</div>
              <div className={styles["input-container"]}>
                <span className={styles["input-icon"]}>
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Nhập username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className={styles["form-group"]}>
              <div className={styles["input-label"]}>Password</div>
              <div className={styles["input-container"]}>
                <span className={styles["input-icon"]}>
                  <FaLock />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  className={styles["password-toggle"]} 
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            
            <div className={styles["remember-me"]}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Ghi nhớ đăng nhập</label>
            </div>
            
            <div className={styles["captcha-group"]}>
              <div className={styles["input-label"]}>Mã captcha</div>
              <div className={styles["captcha-row"]}>
                <input
                  type="text"
                  placeholder=""
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  className={styles["captcha-input"]}
                  required
                />
                <div className={styles["captcha-image-container"]}>
                  <img src={captchaSrc} alt="captcha" className={styles["captcha-img"]} />
                  <button 
                    type="button"
                    className={styles["reload-button"]} 
                    onClick={reloadCaptcha}
                  >
                    <FaSync />
                  </button>
                </div>
              </div>
            </div>
            
            <button type="submit" className={styles["login-button"]}>
              Đăng nhập
            </button>
          </form>
        </div>
        
        <div className={styles["welcome-section"]}>
          <div className={styles["welcome-content"]}>
            <img src={logo} alt="Logo" className={styles["welcome-logo"]} />
            <h2 className={styles["welcome-title"]}>
              Chào mừng bạn quay lại !
            </h2>
            <p className={styles["welcome-subtitle"]}>
              Hãy đăng nhập để tiếp tục
            </p>
            <div className={styles["welcome-links"]}>
              <p>
                Chưa có tài khoản?{" "}
                <a href="/register" className={styles["signup-link"]}>
                  Đăng ký
                </a>
              </p>
              <p>
                <a href="/forgot-password" className={styles["forgot-password-link"]}>
                  Quên mật khẩu?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;