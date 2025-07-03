const userService = require('../services/userService');

exports.getUser = async(req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
};

exports.updateUser = async(req, res) => {
    const updated = await userService.updateUser(req.params.id, req.body);
    res.json(updated);
};