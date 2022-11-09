import { Request, Response } from 'express';

import ProductsService from '../services/product.service';

class ProductController {
  public productService = new ProductsService();

  async postAllController(req: Request, res: Response) {
    const { name, amount } = req.body;

    const novoProduto = await this.productService.postAllService(name, amount);

    res.status(201).json(novoProduto);
  }

  async getAllController(_req: Request, res: Response) {
    const produtos = await this.productService.getAllService();

    res.status(200).json(produtos);
  }
}

export default ProductController;