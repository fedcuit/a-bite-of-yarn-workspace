const users = require("users");

const orders = [{userId: 'edfeng'}, {userId: 'xiaoming'}];
exports = module.exports = {
  getVIPOrders: () => {
    const vips = users.getVIPs();
    return orders.filter(({userId}) => vips.includes(userId))
  }
}
