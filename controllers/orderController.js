const orderService = require('../services/orderService');

exports.createOrder = async(req, res) => {
    const newOrder = await orderService.create(req.body);
    res.status(201).json(newOrder);
};

exports.getOrder = async(req, res) => {
    const order = await orderService.get(req.params.id);
    res.json(order);
};

exports.updateOrder = async(req, res) => {
    const updated = await orderService.update(req.params.id, req.body);
    res.json(updated);
};

exports.deleteOrder = async(req, res) => {
    await orderService.remove(req.params.id);
    res.json({ message: 'Order deleted' });
};