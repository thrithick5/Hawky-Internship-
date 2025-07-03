const customerService = require('../services/customerService');

exports.getAllCustomers = async(req, res) => {
    const customers = await customerService.getAll();
    res.json(customers);
};

exports.addCustomer = async(req, res) => {
    const newCustomer = await customerService.add(req.body);
    res.status(201).json(newCustomer);
};

exports.updateCustomer = async(req, res) => {
    const updated = await customerService.update(req.params.id, req.body);
    res.json(updated);
};