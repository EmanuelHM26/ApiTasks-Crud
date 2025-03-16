import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { createTasks, deleteTask, getTask, getTasks, updateTask } from '../controllers/tasks.controller.js';
import {validateSchema } from '../middlewares/validator.middleware.js'
import {createTaskSchema} from '../schemas/task.schema.js'

const router = Router();

router.get('/tasks', authRequired, getTasks)
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTasks)
router.delete('/tasks/:id', authRequired, deleteTask)
router.get('/tasks/:id', authRequired, getTask)
router.put('/tasks/:id', authRequired, updateTask)

export default router;