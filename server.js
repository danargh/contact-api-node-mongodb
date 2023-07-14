import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
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

// running server
app.listen(4000, () => {
   console.log("Server is running on http://localhost:4000");
});
