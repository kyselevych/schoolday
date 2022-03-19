const router = require('express').Router();
const classroomController = require('../controllers/classroomController');
const memberClassroomMiddleware = require('../middleware/memberClassroomMiddleware');
const teacherClassroomMiddleware = require('../middleware/teacherClassroomMiddleware');

router.post('/create', classroomController.createClassroom);
router.post('/:id/add-member', memberClassroomMiddleware, teacherClassroomMiddleware, classroomController.addMember);
router.post('/:id/remove-member', memberClassroomMiddleware, teacherClassroomMiddleware, classroomController.removeMember);

module.exports = router;