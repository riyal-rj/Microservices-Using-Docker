import express from "express";
import { createTask, getAllTasks } from "../controllers/task.controllers.js";

const router=express.Router();

router.post('/tasks',createTask);
router.get('/tasks',getAllTasks);
export default router;
