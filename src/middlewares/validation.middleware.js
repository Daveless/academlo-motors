const { body, validationResult } = require('express-validator');

const validFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }
  next();
};

exports.createUserValidation = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8, max: 20 })
    .withMessage('Password must be at least 8 characters long'),
  validFields,
];

exports.createRepairValidation = [
  body('date')
    .notEmpty()
    .withMessage('Date cannot be empty')
    .isISO8601()
    .withMessage('Date must have the format yyyy-MM-dd'),
  body('motorsNumber')
    .notEmpty()
    .withMessage('motorsNumber cannot be empty')
    .isNumeric()
    .withMessage('motorsNumber must be a number'),
  body('description')
    .notEmpty()
    .withMessage('description cannot be empty')
    .isString()
    .withMessage('description must be a string'),
  validFields,
];

exports.loginUserValidation = [
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8, max: 20 })
    .withMessage('Password must be at least 8 characters long'),
  validFields,
];
