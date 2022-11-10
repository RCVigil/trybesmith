import jWT from 'jsonwebtoken';
import IUsers from '../interfaces/users.Interface';
import UserModel from '../models/user.model';

export default class UserService {
  public user = new UserModel();
  public jwt = jWT;

  public async postAllService(
    username: string,
    classe: string, 
    level: number, 
    password: string,
  ): Promise<IUsers> {
    const users = await this.user.postAllUserModel(username, classe, level, password);
    return users;
  }

  public createdToken(user: IUsers) {
    const payload = { username: user.username, classe: user.classe };
    const tokenPayload = this.jwt.sign(payload, process.env.JWT_SECRET as string, {algorithm: 'HS256', expiresIn: '1d'});
    console.log('O TOKEN É ===>>   ', tokenPayload);

    return tokenPayload
  }
}
