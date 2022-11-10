import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productRoutesCont = new ProductController();

router.post('/', productRoutesCont.postAllController.bind(productRoutesCont));

router.get('/', productRoutesCont.getAllController.bind(productRoutesCont));

export default router;