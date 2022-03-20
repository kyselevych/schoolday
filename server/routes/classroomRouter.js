const router = require('express').Router();

// Controllers
const classroomController = require('../controllers/classroom/classroomController');
const settingsController = require('../controllers/classroom/settingsController');
const membersController = require('../controllers/classroom/membersController');

// Middlewares
const memberClassroomMiddleware = require('../middleware/memberClassroomMiddleware');
const teacherClassroomMiddleware = require('../middleware/teacherClassroomMiddleware');

// Routes
router.post('/create', classroomController.createClassroom);

router.post('/:id/member', memberClassroomMiddleware, teacherClassroomMiddleware, membersController.addMember);
router.delete('/:id/member', memberClassroomMiddleware, teacherClassroomMiddleware, membersController.removeMember);
router.get('/:id/members', memberClassroomMiddleware, membersController.getMembers);

router.get('/:id/settings', memberClassroomMiddleware, teacherClassroomMiddleware,  settingsController.getSettings);
router.put('/:id/settings', memberClassroomMiddleware, teacherClassroomMiddleware, settingsController.setSettings);

module.exports = router;