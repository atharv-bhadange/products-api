# Simple RESTful API with Node.js and TypeScript

This is a simple RESTful API built with Node.js and TypeScript. It provides basic CRUD operations for managing products and includes middleware for logging incoming requests.

## Getting Started

To run the server locally, follow these steps:

1. Make sure you have Node.js installed. If not, you can download it [here](https://nodejs.org/).

2. Clone this repository:

    ```bash
    git clone https://github.com/atharv-bhadange/return-journey-assignment.git
    ```

3. Navigate to the project directory:

    ```bash
    cd products-api
    ```

4. Install dependencies:

    ```bash
    npm install
    ```

5. Start the server:

    ```bash
    npm start
    ```

By default, the server will run on `http://localhost:3000`.

## Available Endpoints

### Get Products

Retrieve a list of products.

- **Endpoint**: `GET /api/products`
- **Example Response**:

  ```json
  [
    { "id": 1, "name": "Product 1", "description": "Description 1", "price": 10.99 },
    { "id": 2, "name": "Product 2", "description": "Description 2", "price": 19.99 },
    { "id": 3, "name": "Product 3", "description": "Description 3", "price": 5.99 }
  ]
    ```

### Get Product by ID

Retrieve a single product by ID.

- **Endpoint**: `GET /api/products/:id`
- **Example Response**:

  ```json
  { "id": 1, "name": "Product 1", "description": "Description 1", "price": 10.99 }
  ```

### Create Product

Create a new product.

- **Endpoint**: `POST /api/products`
- **Example Request Body**:

  ```json
  { "name": "Product 4", "description": "Description 4", "price": 15.99 }
  ```

- **Example Response**:

  ```json
  { "id": 4, "name": "Product 4", "description": "Description 4", "price": 15.99 }
  ```

### Update Product

Update an existing product.

- **Endpoint**: `PUT /api/products/:id`
- **Example Request Body**:

  ```json
  { "name": "Product 4", "description": "Description 4", "price": 15.99 }
  ```
- **Example Response**:

  ```json
  { "id": 4, "name": "Product 4", "description": "Description 4", "price": 15.99 }
  ```

### Delete Product

Delete an existing product.

- **Endpoint**: `DELETE /api/products/:id`
- **Example Response**:

  ```json
  { "id": 4, "name": "Product 4", "description": "Description 4", "price": 15.99 }
  ```

### Middleware Implementation

A middleware function is implemented to log the timestamp, HTTP method, and requested URL for every incoming request.

## Testing

To run the tests, follow these steps:

1. Navigate to the project directory:

    ```bash
    cd return-journey-assignment/task4-7
    ```
2. Run the tests:

    ```bash
    npm test
    ```


