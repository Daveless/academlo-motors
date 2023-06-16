const Users = require('../models/user.model');

exports.signup = async (req, res) => {
  try {
    return res.status(200).json({
      message: 'User created successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await Users.create({
      name,
      email,
      password,
    });

    return res.status(200).json({
      message: 'User created successfully',
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
