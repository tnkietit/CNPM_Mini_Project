const connectDB = require("./db"); // Import connectDB

const startServer = async () => {
    await connectDB(); // Đảm bảo MongoDB kết nối trước khi chạy server

    const express = require("express");
    const cors = require("cors");

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Chatbot server is running...");
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};
const chatRoutes = require('./routes/chatRoutes');
app.use('/chat', chatRoutes);

startServer(); // Chạy server sau khi kết nối MongoDB thành công