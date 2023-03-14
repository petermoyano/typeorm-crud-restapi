import { Router } from "express";
import { createUser } from "../controllers/users.controllers";

const router = Router();

router.get("/hello", (req, res) => res.send("hello world"));

router.post("/users", createUser);
export default router;
