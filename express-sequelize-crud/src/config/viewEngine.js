import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// để dùng __dirname trong ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configViewEngine = (app) => {
  // trỏ đúng đến thư mục src/views
  app.set("views", path.join(__dirname, "..", "views"));
  app.set("view engine", "ejs");

  // nếu có static file (css, js, img)
  app.use(express.static(path.join(__dirname, "..", "public")));
};

export default configViewEngine;
