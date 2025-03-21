import React from "react";
import "./FeedbackForm.css";

function FeedbackForm({ closeFeedback }) {
  return (
    <div className="feedback-form">
      <h3>Góp ý & Phản hồi</h3>
      <textarea placeholder="Nhập phản hồi của bạn..."></textarea>
      <button onClick={closeFeedback}>Đóng</button>
    </div>
  );
}

export default FeedbackForm;
