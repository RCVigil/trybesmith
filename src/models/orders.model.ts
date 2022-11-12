import { RowDataPacket } from 'mysql2';
import IOrders from '../interfaces/orders.Interface';
import mysql from './connection';

class OrdersModel {
  private connection = mysql;

  async getAllOrdersModel(): Promise<IOrders[]> {
    const [ordersAll] = await this.connection.execute<(IOrders & RowDataPacket)[]
    >(`
    SELECT
      o.id AS id,
      o.userId AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON p.orderId = o.id
    GROUP BY o.id`);
    return ordersAll;
  }
}

export default OrdersModel;
