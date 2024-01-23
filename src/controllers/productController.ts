import { Request, Response } from 'express';
import { Product } from '../models/productModel';

const products: Product[] = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 19.99 },
  { id: 3, name: "Product 3", description: "Description 3", price: 5.99 }

];


/**
 * Retrieves all products.
 * @param req - The request object.
 * @param res - The response object.
 */
export const getProducts = (req: Request, res: Response) => {
  res.json(products);
};

/**
 * Retrieves a product by its ID.
 * @param req - The request object.
 * @param res - The response object.
 */
export const getProductById = (req: Request, res: Response) => {
  const productId: number = parseInt(req.params.id);
  const product: Product | undefined = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

/**
 * Creates a new product.
 * @param req - The request object.
 * @param res - The response object.
 */
export const createProduct = (req: Request, res: Response) => {
  const newProduct: Product = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);

  res.status(201).json(newProduct);
};

/**
 * Updates a product by its ID.
 * @param req - The request object.
 * @param res - The response object.
 */
export const updateProduct = (req: Request, res: Response) => {
  const productId: number = parseInt(req.params.id);
  const updatedProduct: Product = req.body;
  const index: number = products.findIndex((p) => p.id === productId);

  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

/**
 * Deletes a product by its ID.
 * @param req - The request object.
 * @param res - The response object.
 */
export const deleteProduct = (req: Request, res: Response) => {
  const productId: number = parseInt(req.params.id);
  const index: number = products.findIndex((p) => p.id === productId);

  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);
    res.json(deletedProduct[0]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
