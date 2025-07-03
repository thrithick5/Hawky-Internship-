exports.getUserById = async(id) => {
    return { id, name: 'John Doe', role: 'admin' };
};

exports.updateUser = async(id, data) => {
    return { id, ...data };
};