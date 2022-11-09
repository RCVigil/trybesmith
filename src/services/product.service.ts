import IProducts from '../interfaces/products.Interface';
import ProductModel from '../models/products.model';

export default class ProductService {
  public product = new ProductModel();

  public async postAllService(name: string, amount: string): Promise<IProducts> {
    const products = await this.product.postAllProductModel(name, amount);
    return products;
  }

  public async getAllService(): Promise<IProducts[]> {
    return this.product.getAllProductModel();
  }
}
