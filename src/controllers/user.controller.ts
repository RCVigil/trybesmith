import { Request, Response } from 'express';

import UserService from '../services/user.service';

class UserController {
  public userService = new UserService();

  async postAllController(req: Request, res: Response) {
    const user = req.body;

    const novoUsers = await this.userService.postAllService(
      user.username,
      user.classe,

      user.level,

      user.password,
    );

    const token = await this.userService.createdToken(user);

    console.log('NOVO USERS NA CONTROLLER É ===>>', novoUsers);

    res.status(201).json({ token });
  }
}

export default UserController;
