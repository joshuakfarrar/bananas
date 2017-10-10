const users = require('./users/users.service.js');
const foodsToAvoid = require('./foodsToAvoid/foodsToAvoid.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.use('/foodsToAvoid', foodsToAvoid);
};
