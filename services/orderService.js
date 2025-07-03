let orders = [];

exports.create = async(data) => {
    const id = orders.length + 1;
    const order = { id, ...data };
    orders.push(order);
    return order;
};

exports.get = async(id) => orders.find(o => o.id == id);

exports.update = async(id, data) => {
    orders = orders.map(o => o.id == id ? {...o, ...data } : o);
    return orders.find(o => o.id == id);
};

exports.remove = async(id) => {
    orders = orders.filter(o => o.id != id);
};