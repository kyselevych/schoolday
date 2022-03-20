const router = require('express').Router();
const classroomController = require('../controllers/classroomController');
const memberClassroomMiddleware = require('../middleware/memberClassroomMiddleware');
const teacherClassroomMiddleware = require('../middleware/teacherClassroomMiddleware');

router.post('/create', classroomController.createClassroom);

router.post('/:id/member', memberClassroomMiddleware, teacherClassroomMiddleware, classroomController.addMember);
router.delete('/:id/member', memberClassroomMiddleware, teacherClassroomMiddleware, classroomController.removeMember);
router.get('/:id/members', memberClassroomMiddleware, classroomController.getMembers);

router.get('/:id/settings', memberClassroomMiddleware, teacherClassroomMiddleware, classroomController.getSettings);
router.put('/:id/settings', memberClassroomMiddleware, teacherClassroomMiddleware, classroomController.setSettings);

module.exports = router;