import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const router = Router();

const ordersRoutesCont = new OrdersController();

router.get('/', ordersRoutesCont.getAllController.bind(ordersRoutesCont));

export default router;
