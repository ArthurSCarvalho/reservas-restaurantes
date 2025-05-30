const express = require('express');
const cors = require('cors');
const app = express();

const atendenteRoutes = require('./routes/atendente');
const garcomRoutes = require('./routes/garcom');
const gerenteRoutes = require('./routes/gerente');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/atendente', atendenteRoutes);
app.use('/garcom', garcomRoutes);
app.use('/gerente', gerenteRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
    });