import express from "express";

const router = express.Router();



router.get("/users")
router.get("/users/:id")
router.post("/users")
router.delete("/users/:id")
router.put("/users/:id")



export { router };