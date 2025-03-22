import React, { useEffect, useState } from 'react';
import { FaSpinner, FaCheckCircle } from 'react-icons/fa';
import './DynamicNotification.css';

const DynamicNotification = ({ show, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setIsLoading(true);
      setIsSuccess(false);
      
      // Đợi spinner xoay đủ 1.3s rồi chuyển sang success
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
      }, 700);

      // Sau 3s đóng notification
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
        setIsSuccess(false);
        onClose();
      }, 3000);

      return () => {
        clearTimeout(loadingTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [show, onClose]);

  if (!show && !isVisible) return null;

  return (
    <div className={`notification-container ${isVisible ? 'show' : ''} ${isSuccess ? 'success' : ''}`}>
      <div className={`notification-icon ${isLoading ? 'loading' : 'success'}`}>
        <FaSpinner className="spinner" />
        <FaCheckCircle className="success-icon" />
      </div>
      <div className="notification-content">
        <div className="notification-title">
          {isLoading ? 'Đang xử lý đăng nhập' : 'Đăng nhập thành công'}
        </div>
        <div className="notification-message">
          {isLoading ? 'Vui lòng đợi...' : message}
        </div>
      </div>
      <div className="notification-progress" />
    </div>
  );
};

export default DynamicNotification; 