import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/products.Interface';
import mysql from './connection';

class ProductModel {
  private connection = mysql;

  async postAllProductModel(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Products(name, amount) VALUES(?,?)`, [name, amount]);

    const novoProduct = {
      id: insertId,
      name,
      amount,
    };
  
    return novoProduct;
  }

  async getAllProductModel(): Promise<IProduct[]> {
    const [productsAll] = await this.connection.execute<(IProduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Products');
    return productsAll;
  }
}

export default ProductModel;