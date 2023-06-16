const Users = require('../models/user.model');

exports.findUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      where: { status: 'available' },
    });

    res.status(200).json({
      message: 'Users found',
      results: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};

exports.findUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findOne({
      where: { id, status: 'available' },
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        status: 'error',
      });
    }

    res.status(200).json({
      message: 'User found successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await Users.findOne({
      where: { id },
      status: 'available',
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        status: 'error',
      });
    }

    await user.update({
      name,
      email,
    });

    res.status(200).json({
      message: 'User updated',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findOne({
      where: { id },
      status: 'available',
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        status: 'error',
      });
    }

    await user.update({
      status: 'unavailable',
    });

    res.status(200).json({
      message: 'User deleted',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};
