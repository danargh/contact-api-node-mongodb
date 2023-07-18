import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { publicRouter } from "./src/routes/public-api.js";
import { errorMiddleware } from "./src/middleware/error.js";
const app = express();

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
app.use(publicRouter);

// error middleware
app.use(errorMiddleware);

// route / console hello world
app.get("/", (req, res) => {
   res.send("Router utama");
});

export { app };
