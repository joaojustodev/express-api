import express from "express";
import userController from "./controllers/User";
import sessionController from "./controllers/Session";


const router = express.Router();


router.get("/users", userController.findUsersController);
router.get("/users/:id", userController.findUserController)
router.post("/users", userController.createUserController)
router.delete("/users/:id")
router.put("/users/:id")


router.post("/login", sessionController.sessionLogin);



export { router };