const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
