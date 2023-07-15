import express from "express";
import register from "../controllers/user-controller.js";

const publicRouter = express.Router();
publicRouter.post("/api/users", register);

export { publicRouter };
