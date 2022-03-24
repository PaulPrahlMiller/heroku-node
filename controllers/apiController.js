const { body, validationResult } = require('express-validator');

exports.login = function (req, res) {
  body('firstname')
    .trim()
    .isLength({ min: 1 })
    .withMessage('First name is required');
  body('lastname')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Last name is required')
    .isAlpha()
    .withMessage('Last name can only contain letters'),
    body('email').trim().isEmail().withMessage('Please enter a valid email'),
    body('password')
      .trim()
      .isLength({ min: 6 })
      .withMessage('Minimum password length is 6')
      .isAlphanumeric()
      .withMessage('Password can only contain letters and numbers');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  res.status(200).json(req.body);
};
