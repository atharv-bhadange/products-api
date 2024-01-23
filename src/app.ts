import express from 'express';
import productRoutes from './routes/productRoutes';
import requestLogger from './middleware/requestLogger';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(requestLogger);

app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;

