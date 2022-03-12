const router = require('express').Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.registration);
router.post('/login', userController.login);
router.post('/auth', authMiddleware, userController.check);

module.exports = router;