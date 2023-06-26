const repairs = require('../models/repairs.model');
const Users = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.findUsers = catchAsync(async (req, res, next) => {
  const users = await Users.findAll({
    where: {
      status: 'available',
    },
    include: [
      {
        model: repairs,
      },
    ],
  });

  res.status(200).json({
    message: 'Users found',
    results: users.length,
    users,
  });
});

exports.findUserById = catchAsync(async (req, res, next) => {
  const { user } = req;

  res.status(200).json({
    status: 'success',
    user,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, email } = req.body;

  await user.update({
    name,
    email,
  });

  res.status(200).json({
    message: 'User updated',
    user,
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  await user.update({
    status: 'unavailable',
  });

  res.status(200).json({
    message: 'User deleted',
  });
});
