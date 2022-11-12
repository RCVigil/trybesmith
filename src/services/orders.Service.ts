import IOrders from '../interfaces/orders.Interface';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  public orders = new OrdersModel();

  public async getAllService(): Promise<IOrders[]> {
    return this.orders.getAllOrdersModel();
  }
}
