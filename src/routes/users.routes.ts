import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userRoutesCont = new UserController();

router.post('/', userRoutesCont.postAllController.bind(userRoutesCont));

export default router;