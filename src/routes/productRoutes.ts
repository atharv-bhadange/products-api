/**
 * Express router for handling product routes.
 * @module productRoutes
 */

import express from 'express';
import * as productController from '../controllers/productController';

const router = express.Router();

/**
 * Route for getting all products.
 * @name GET /api/products
 * @function
 */
router.get('/api/products', productController.getProducts);

/**
 * Route for getting a product by ID.
 * @name GET /api/products/:id
 * @function
 * @param {string} id - The ID of the product.
 */
router.get('/api/products/:id', productController.getProductById);

/**
 * Route for creating a new product.
 * @name POST /api/products
 * @function
 */
router.post('/api/products', productController.createProduct);

/**
 * Route for updating a product.
 * @name PUT /api/products/:id
 * @function
 * @param {string} id - The ID of the product to update.
 */
router.put('/api/products/:id', productController.updateProduct);

/**
 * Route for deleting a product.
 * @name DELETE /api/products/:id
 * @function
 * @param {string} id - The ID of the product to delete.
 */
router.delete('/api/products/:id', productController.deleteProduct);

export default router;
