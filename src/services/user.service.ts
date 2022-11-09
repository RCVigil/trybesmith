import IUsers from '../interfaces/users.Interface';
import UserModel from '../models/user.model';

export default class UserService {
  public user = new UserModel();

  public async getAllService(): Promise<IUsers[]> {
    const users = await this.user.getAllUserModel();
    return users;
  }
}
