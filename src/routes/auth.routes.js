const express = require('express');

const authController = require('../controllers/auth.contollers');

const validationMiddleware = require('../middlewares/validation.middleware');
const router = express.Router();

router
  .route('/signup')
  .post(validationMiddleware.createUserValidation, authController.signup);
router.route('/login').post(authController.login);

module.exports = router;
