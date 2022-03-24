const router = require('express').Router();
const apiController = require('../controllers/apiController');

router.get('/', (req, res) => {
  res.json({ msg: 'Hello from API' });
});

router.post('/login', apiController.login);

module.exports = router;
