import { Request, Response } from 'express';

import UserService from '../services/user.service';

export default class UserController {
  public userService = new UserService();

  public getAllController = async (_req: Request, res: Response) => {
    const users = await this.userService.getAllService();

    res.status(200).json(users);
  };
}
