import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userRoutesCont = new UserController();

router.get('/', userRoutesCont.getAllController);

export default router;