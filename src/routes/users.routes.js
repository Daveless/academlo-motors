const express = require('express');

const userController = require('../controllers/user.controllers');
const userMiddleware = require('../middlewares/users.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const validationMiddleware = require('../middlewares/validation.middleware');
const authController = require('../controllers/auth.contollers');

const router = express.Router();

router
  .route('/signup')
  .post(validationMiddleware.createUserValidation, authController.signup);
router
  .route('/login')
  .post(validationMiddleware.loginUserValidation, authController.login);

router.use(authMiddleware.protect);
router.use(authMiddleware.renew);

router.route('/').get(userController.findUsers);

router
  .route('/:id')
  .get(userMiddleware.validUser, userController.findUserById)
  .patch(userMiddleware.validUser, userController.updateUser)
  .delete(userMiddleware.validUser, userController.deleteUser);

module.exports = router;
