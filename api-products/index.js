const express = require('express');
require ('./db');

const app = express();

app.use(express.json());

const products = require('./routes/products');

app.use('/products', products);

const PORT = process.env.PORT || 3002

app.listen(PORT, () =>{
    console.log(`API-PRODUCTS - PORT ${PORT}`);
});