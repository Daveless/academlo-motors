const express = require('express');

const userController = require('../controllers/user.controllers');

const router = express.Router();

router.route('/').get(userController.findUsers).post(userController.createUser);

router
  .route('/users/:id')
  .get(userController.findUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
