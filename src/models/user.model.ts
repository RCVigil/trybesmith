import { ResultSetHeader } from 'mysql2';
import IUsers from '../interfaces/users.Interface';
import mysql from './connection';

class UserModel {
  private connection = mysql;

  async postAllUserModel(
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUsers> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES
    (?, ?, ?, ?)`, [username, classe, level, password]);

    const novoUser = {
      id: insertId,
      username,
      classe,
      level,
      password,
    };

    console.log('NOVO USER NA MODEL É ===   ', novoUser);

    return novoUser;
  }
}

export default UserModel;
