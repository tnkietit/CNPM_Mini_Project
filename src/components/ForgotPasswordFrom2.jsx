import React from 'react';
import './ForgotPasswordFrom.css';

const ForgotPasswordFrom2 = () => {
  return (
    <div className='container'>
      <div className='left-panel'>
        <div className='warpper large-box'> {/* Thêm lớp `large-box` */}
          <form action=''>
            <h1>Đặt lại mật khẩu</h1>
            <div className='Box verify-box'>
                <p className='label'>Nhập mã xác nhận:</p>
                <div className="input-group">
                    <input type='text' className='verify-input' placeholder='Nhập mã xác nhận' required />
                    <span className='clickable-text' onClick={() => alert("Đã gửi mã vui lòng kiểm tra tin nhắn!!")}>Gửi mã xác nhận</span>
                </div>
            </div>
            <div className='Box'>
              <p className='label'>Nhập mật khẩu mới:</p>
              <input type='password' placeholder='Nhập mật khẩu mới' required />
            </div>
            <div className='Box'>
              <p className='label'>Nhập lại mật khẩu:</p>
              <input type='password' placeholder='Nhập lại mật khẩu' required />
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

export default ForgotPasswordFrom2;
