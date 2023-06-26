const Users = require('./user.model');
const Repairs = require('./repairs.model');

const initModel = () => {
  Users.hasMany(Repairs, { foreignKey: 'userId' });
  Repairs.belongsTo(Users, { foreignKey: 'userId' });
};

module.exports = initModel;
