import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import configViewEngine from "./config/viewEngine.js";
import webRoutes from "./router/web.js";
import sequelize from "./config/connectDB.js";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
app.use("/", webRoutes);

// Kiểm tra DB & khởi động server
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected.");
    app.listen(PORT, () => console.log(`🚀 Server started at http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ Unable to connect to the database:", err);
  }
})();
