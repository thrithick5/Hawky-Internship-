const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.getAllCustomers);
router.post('/', customerController.addCustomer);
router.put('/:id', customerController.updateCustomer);

module.exports = router;