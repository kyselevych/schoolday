const router = require('express').Router();
const classroomController = require('../controllers/classroomController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, classroomController.createClassroom);

module.exports = router;