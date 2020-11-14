const express = require('express');
const httpProxy = require('express-http-proxy');

const app = express();

const PORT = 3000

const { SALES_API_URL, PRODUCTS_API_URL,} = require ('./urls')

const salesServiceProxy = httpProxy(SALES_API_URL);
const productsServiceProxy = httpProxy(PRODUCTS_API_URL);

app.get('/', (req, res) => {
    res.send ('Hello Gateway API')
});

app.get('/sales', (req, res, next) => {
    salesServiceProxy(req, res, next);
});

app.get('/products', (req, res, next) => {
    productsServiceProxy(req, res, next);
});

app.listen(PORT, () => console.log('API Gateway in port 3000'));