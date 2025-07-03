let customers = [];

exports.getAll = async() => customers;

exports.add = async(data) => {
    const id = customers.length + 1;
    const customer = { id, ...data };
    customers.push(customer);
    return customer;
};

exports.update = async(id, data) => {
    customers = customers.map(c => c.id == id ? {...c, ...data } : c);
    return customers.find(c => c.id == id);
};