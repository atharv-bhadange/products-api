import {describe, expect, test} from '@jest/globals';
import app from "../src/app";
import request from "supertest";


describe('GET /api/products', () => {

  test('should return an array of products', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });

});

describe('GET /api/products/:id', () => {

  test('should return a product if valid id is provided', async () => {
    const response = await request(app).get('/api/products/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

  test('should return a 404 if invalid id is provided', async () => {
    const response = await request(app).get('/api/products/3');
    expect(response.status).toBe(404);
  });

});

describe('POST /api/products', () => {

  test('should return a 201 and the newly created product', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({ name: 'Product 3', description: 'Description 3', price: 10.99 });
    expect(response.status).toBe(201);
    expect(response.body).toBeTruthy();
  });

});

describe('PUT /api/products/:id', () => {

  test('should return a 200 and the updated product', async () => {
    const response = await request(app)
      .put('/api/products/1')
      .send({ name: 'Product 1', description: 'Description 1', price: 10.99 });
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

  test('should return a 404 if invalid id is provided', async () => {
    const response = await request(app)
      .put('/api/products/999')
      .send({ name: 'Product 999', description: 'Description 999', price: 10.99 });
    expect(response.status).toBe(404);
  });

});

describe('DELETE /api/products/:id', () => {

  test('should return a 200 and the deleted product', async () => {
    const response = await request(app).delete('/api/products/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

  test('should return a 404 if invalid id is provided', async () => {
    const response = await request(app).delete('/api/products/999');
    expect(response.status).toBe(404);
  });

});

