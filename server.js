import express from 'express';
import productsRouter from './routes/products.routes.js';
import cartsRouter from './routes/carts.routes.js';
import telemetryRouter from './routes/telemetry.routes.js';

const app = express();
const PORT = 8080;

// Middleware para parsear JSON
app.use(express.json());

// Usar routers
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/telemetry', telemetryRouter);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});