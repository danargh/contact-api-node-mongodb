import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { publicRouter } from "./app/routes/public-api.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// constants
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie middleware
app.use(cookieParser());

// cors middleware
app.use(
   cors({
      origin: "http://localhost:3000",
      credentials: true,
   })
);

// logging middleware

// helmet middleware

// session middleware

// auth middleware

// routes
// app.use(publicRouter);

// route / console hello world
app.get("/", (req, res) => {
   res.send("Hello World");
});

// running server
app.listen(PORT, HOST, () => {
   console.log(`Running on http://${HOST}:${PORT}`);
});
