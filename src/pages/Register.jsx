import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.registerWrapper}>
      <div className={styles.boxContainer}>
        {/* Phần bên trái (Chào mừng) */}
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>Chào mừng bạn!</h1>
          <p className={styles.welcomeSubtitle}>Hãy tạo tài khoản để bắt đầu</p>
          <p className={styles.loginPrompt}>
            Đã có tài khoản?{' '}
            <Link to="/login" className={styles.loginLink}>
              Quay lại đăng nhập
            </Link>
          </p>
        </div>

        {/* Phần bên phải (Form đăng ký) */}
        <div className={styles.registerContainer}>
          <div className={styles.registerFormSection}>
            <h2 className={styles.registerTitle}>Đăng ký</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Họ và tên</label>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Tên đăng nhập</label>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Nhập tên đăng nhập"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Email</label>
                <div className={styles.inputContainer}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Nhập email của bạn"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Nhập mật khẩu</label>
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Nhập mật khẩu"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Xác nhận mật khẩu</label>
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Nhập lại mật khẩu"
                    required
                  />
                </div>
              </div>

              <div className={styles.captchaGroup}>
                <label className={styles.inputLabel}>Mã captcha</label>
                <div className={styles.captchaRow}>
                  <input
                    type="text"
                    className={styles.captchaInput}
                    placeholder="Nhập mã captcha"
                    required
                  />
                  <div className={styles.captchaImageContainer}>
                    {/* Thay bằng link ảnh captcha của bạn */}
                    <img
                      src="path_to_captcha_image"
                      alt="captcha"
                      className={styles.captchaImg}
                    />
                    <button type="button" className={styles.refreshButton}>
                      ↻
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.termsGroup}>
                <label className={styles.termsLabel}>
                  <input
                    type="checkbox"
                    required
                    className={styles.termsCheckbox}
                  />
                  <span>
                    Tôi đồng ý với{' '}
                    <a href="#" className={styles.termsLink}>
                      điều khoản
                    </a>{' '}
                    sử dụng
                  </span>
                </label>
              </div>

              <button type="submit" className={styles.registerButton}>
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
