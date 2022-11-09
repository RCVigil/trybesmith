import { RowDataPacket } from 'mysql2';
import IUsers from '../interfaces/users.Interface';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  async getAllUserModel(): Promise<IUsers[]> {
    const [rows] = await this.connection.execute<IUsers[] & RowDataPacket[]>(`
    SELECT
    id, username, classe, level
    `);
  
    return rows;
  }
}
