import { Request, Response } from 'express';

import OrdersService from '../services/orders.Service';

class UserController {
  public userService = new OrdersService();

  async getAllController(_req: Request, res: Response) {
    const ordersCont = await this.userService.getAllService();
    
    res.status(200).json(ordersCont);
  }
}

export default UserController;
