import express from "express";
import userController from "./controllers/User";
import sessionController from "./controllers/Session";
import authMiddleware from "./middleware/authMiddleware";

const router = express.Router();

router.post("/users", authMiddleware, userController.findUsersController);
router.post("/users/:id", authMiddleware, userController.findUserController);

router.post("/login", sessionController.loginSessionController);
router.post("/register", sessionController.registerSessionController);

export { router };
