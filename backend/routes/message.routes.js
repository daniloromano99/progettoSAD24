import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute,sendMessage); //protectRouter è un'autorizzazione che aggiungiamo per proteggere il routes dei messaggi

export default router;