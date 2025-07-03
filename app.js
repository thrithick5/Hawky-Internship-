const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors()); // Allow all origins
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

app.get('/test', (req, res) => {
    res.send('API Test Passed ✅');
});

module.exports = app;