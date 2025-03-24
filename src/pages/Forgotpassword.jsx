import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ identifier: '', method: 'email' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yêu cầu khôi phục mật khẩu:', formData);
    // Logic gửi yêu cầu khôi phục mật khẩu (API, v.v.)
    navigate('/login');
  };

  return (
    <div className={styles.forgotWrapper}>
      <div className={styles.boxContainer}>
        {/* Cột trái: Thông điệp "Đừng lo!" */}
        <div className={styles.infoSection}>
          <h1 className={styles.infoTitle}>Đừng lo!</h1>
          <p className={styles.infoSubtitle}>
            Chỉ cần vài bước đơn giản, chúng tôi sẽ giúp bạn khôi phục tài khoản của mình.
          </p>
          <p className={styles.backPrompt}>
            <a href="#" onClick={() => navigate('/login')} className={styles.backLink}>
              Quay lại đăng nhập
            </a>
          </p>
        </div>
        {/* Cột phải: Form nhập thông tin */}
        <div className={styles.formSection}>
          <div className={styles.forgotFormSection}>
            <h2 className={styles.forgotTitle}>Quên mật khẩu</h2>
            <form onSubmit={handleSubmit} className={styles.forgotForm}>
              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Phương thức xác nhận</label>
                <select
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                  className={styles.selectInput}
                >
                  <option value="email">Qua Email</option>
                  <option value="phone">Qua SĐT</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Email/SĐT</label>
                <input
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  placeholder="Nhập Email hoặc SĐT"
                  required
                  className={styles.inputField}
                />
              </div>
              <button type="submit" className={styles.forgotButton}>
                Xác nhận
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
