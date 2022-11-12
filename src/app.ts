import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import UsersRoutes from './routes/users.routes';
import ProductRoutes from './routes/products.routes';
import OrdersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/users', UsersRoutes);

app.use('/products', ProductRoutes);

app.use('/orders', OrdersRoutes);

app.use(httpErrorMiddleware);

export default app;
