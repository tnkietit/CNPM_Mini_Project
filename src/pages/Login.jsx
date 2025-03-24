import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaSync } from "react-icons/fa";
import styles from "./Login.module.css";
import logo from "/src/img/Logoz.png";
import DynamicNotification from "../components/DynamicNotification";
import ForgotPassword from "./Forgotpassword"; // Giữ nguyên import nếu cần sử dụng ở chỗ khác

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaSrc, setCaptchaSrc] = useState(
    "https://miro.medium.com/v2/resize:fit:640/format:webp/1*MHqIWdansPvRMEmUK2KNPw.png"
  );
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const reloadCaptcha = (e) => {
    e.preventDefault();
    setCaptchaSrc(`${captchaSrc}?rand=${Math.random()}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      // Kiểm tra đăng nhập
      if (formData.username && formData.password && captcha) {
        localStorage.setItem("isLoggedIn", "true");
        setShowNotification(true);
        setTimeout(() => {
          navigate("/main");
        }, 1500);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <div className={styles["login-wrapper"]}>
      <div className={styles["login-container"]}>
        {/* Form đăng nhập */}
        <div className={styles["login-form-section"]}>
          <h2 className={styles["login-title"]}>Đăng nhập</h2>

          <form className={styles["login-form"]} onSubmit={handleSubmit}>
            {/* Username */}
            <div className={styles["form-group"]}>
              <div className={styles["input-label"]}>Username/Email</div>
              <div className={styles["input-container"]}>
                <span className={styles["input-icon"]}>
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Nhập username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password */}
            <div className={styles["form-group"]}>
              <div className={styles["input-label"]}>Password</div>
              <div className={styles["input-container"]}>
                <span className={styles["input-icon"]}>
                  <FaLock />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className={styles["password-toggle"]}
                  onClick={togglePasswordVisibility}
                  disabled={isLoading}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className={styles["remember-me"]}>
              <input type="checkbox" id="remember" disabled={isLoading} />
              <label htmlFor="remember">Ghi nhớ đăng nhập</label>
            </div>

            {/* Captcha */}
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
                  disabled={isLoading}
                />
                <div className={styles["captcha-image-container"]}>
                  <img
                    src={captchaSrc}
                    alt="captcha"
                    className={styles["captcha-img"]}
                  />
                  <button
                    type="button"
                    className={styles["reload-button"]}
                    onClick={reloadCaptcha}
                    disabled={isLoading}
                  >
                    <FaSync />
                  </button>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className={styles["login-button"]} disabled={isLoading}>
              {isLoading ? "Đang xử lý..." : "Đăng nhập"}
            </button>
          </form>
        </div>

        {/* Welcome section */}
        <div className={styles["welcome-section"]}>
          <div className={styles["welcome-content"]}>
            <img src={logo} alt="Logo" className={styles["welcome-logo"]} />
            <h2 className={styles["welcome-title"]}>Chào mừng bạn quay lại !</h2>
            <p className={styles["welcome-subtitle"]}>Hãy đăng nhập để tiếp tục</p>
            <div className={styles["welcome-links"]}>
              <p>
                Chưa có tài khoản?{" "}
                <Link to="/register" className={styles["signup-link"]}>
                  Đăng ký
                </Link>
              </p>
              <p>
                {/* Nút Quên mật khẩu chuyển hướng sang page mới */}
                <Link to="/forgot-password" className={styles["forgot-password-link"]}>
                  Quên mật khẩu?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thông báo khi đăng nhập thành công */}
      <DynamicNotification
        show={showNotification}
        message="Chào mừng bạn đã quay trở lại!"
        onClose={handleNotificationClose}
      />
    </div>
  );
};

export default Login;
