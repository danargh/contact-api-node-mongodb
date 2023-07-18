import express from "express";
import { registerController } from "../controllers/user-controller.js";

const publicRouter = new express.Router();
publicRouter.post("/api/users", registerController);

export { publicRouter };
