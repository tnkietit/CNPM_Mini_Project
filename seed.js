// seed.js
const mongoose = require('./db'); // kết nối db
const User = require('./models/User');
const Course = require('./models/Course');
const Document = require('./models/Document');
const Topic = require('./models/Topic');
const Question = require('./models/Question');
const BotAnswer = require('./models/BotAnswer');
const Feedback = require('./models/Feedback');

async function seedData() {
  try {
    // Xoá dữ liệu cũ nếu có (tuỳ chọn)
    await User.deleteMany({});
    await Course.deleteMany({});
    await Document.deleteMany({});
    await Topic.deleteMany({});
    await Question.deleteMany({});
    await BotAnswer.deleteMany({});
    await Feedback.deleteMany({});

    console.log('✅ Đã xoá dữ liệu cũ');

    // Thêm dữ liệu mẫu

    // 1. User
    const users = [
      { userId: 'U001', name: 'Nguyen Van A', password: '123456', email: 'a@example.com', role: 'SinhVien' },
      { userId: 'U002', name: 'Tran Thi B', password: 'abcdef', email: 'b@example.com', role: 'GiaoVien' },
      { userId: 'U003', name: 'Admin', password: 'admin123', email: 'admin@example.com', role: 'Admin' }
    ];
    await User.insertMany(users);
    console.log('✅ Đã thêm dữ liệu User');

    // 2. Course
    const courses = [
      { courseId: 'CS101', name: 'Lịch Sử Đảng', credit: 3 },
      { courseId: 'CS102', name: 'Chủ Nghĩa Xã Hội Khoa Học', credit: 3 },
      { courseId: 'CS103', name: 'Kinh Tế Chính Trị', credit: 3 }
    ];
    await Course.insertMany(courses);
    console.log('✅ Đã thêm dữ liệu Course');

    // 3. Document
    const documents = [
      { documentId: 'D001', courseId: 'CS101', name: 'Giáo trình Java cơ bản', type: 'PDF', link: 'https://example.com/java.pdf', note: 'Tài liệu nhập môn Java' },
      { documentId: 'D002', courseId: 'CS102', name: 'Giáo trình CSDL', type: 'PDF', link: 'https://example.com/db.pdf', note: 'Tài liệu CSDL cơ bản' }
    ];
    await Document.insertMany(documents);
    console.log('✅ Đã thêm dữ liệu Document');

    // 4. Topic
    const topics = [
      { topicId: 'T001', name: 'OOP trong Java', courseId: 'CS101' },
      { topicId: 'T002', name: 'SQL cơ bản', courseId: 'CS102' }
    ];
    await Topic.insertMany(topics);
    console.log('✅ Đã thêm dữ liệu Topic');

    // 5. Question
    const questions = [
      { questionId: 'Q001', userId: 'U001', topicId: 'T001', content: 'Làm thế nào để cài đặt JDK?', explanation: 'Cài đặt JDK từ trang chủ Oracle', createdAt: new Date() },
      { questionId: 'Q002', userId: 'U001', topicId: 'T002', content: 'SELECT * FROM dùng như thế nào?', explanation: 'Lấy toàn bộ dữ liệu từ bảng', createdAt: new Date() }
    ];
    await Question.insertMany(questions);
    console.log('✅ Đã thêm dữ liệu Question');

    // 6. BotAnswer
    const botAnswers = [
      { answerId: 'A001', questionId: 'Q001', answer: 'Bạn có thể tải JDK từ trang Oracle và cài đặt theo hướng dẫn', solution: 'Cài đặt xong nhớ set JAVA_HOME', createdAt: new Date() },
      { answerId: 'A002', questionId: 'Q002', answer: 'SELECT * FROM tableName sẽ lấy toàn bộ dữ liệu của bảng', solution: 'Tốt nhất chỉ lấy những cột cần thiết', createdAt: new Date() }
    ];
    await BotAnswer.insertMany(botAnswers);
    console.log('✅ Đã thêm dữ liệu BotAnswer');

    // 7. Feedback
    const feedbacks = [
      { feedbackId: 'F001', userId: 'U001', content: 'Trả lời của bot rất hữu ích!', rating: 5, createdAt: new Date() },
      { feedbackId: 'F002', userId: 'U001', content: 'Cần thêm ví dụ cụ thể hơn.', rating: 3, createdAt: new Date() }
    ];
    await Feedback.insertMany(feedbacks);
    console.log('✅ Đã thêm dữ liệu Feedback');

  } catch (err) {
    console.error('❌ Lỗi khi seed dữ liệu:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedData();