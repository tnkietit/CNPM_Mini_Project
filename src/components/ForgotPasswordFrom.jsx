import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPasswordFrom.css';

const ForgotPasswordFrom = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn load lại trang
    navigate('/forgot-password-step2'); // Chuyển đến bước 2
  };

  return (
    <div className='container'>
      <div className='left-panel'>
        <div className='warpper'>
          <form onSubmit={handleSubmit}>
            <h1>Quên mật khẩu</h1>
            <div className='Box'>
                <p className='label'>Chọn vấn đề của bạn: </p>
                <select className='Items'>
                    <option value="Item1">Quên tài khoản</option>
                    <option value="Item2">Quên email</option>
                    <option value="Item3">Quên mật khẩu</option>
                </select>
            </div>
            <div className='Box'>
              <p className='label'>Nhập email của bạn:</p>
              <input type='email' placeholder='Hãy nhập email' required />
            </div>
            <button type='submit'>Xác nhận</button>
          </form>
        </div>
      </div>
      <div className='right-panel'>
        <p>Đừng lo! Chỉ cần vài bước để khôi phục tài khoản</p>
      </div>
    </div>
  );
};

export default ForgotPasswordFrom;
