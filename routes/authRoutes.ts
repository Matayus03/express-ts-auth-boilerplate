import authControllers from "../controllers/authControllers";
import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.post("/register", authControllers.register);

router.post("/login", authControllers.login);

export default router;