const router = require('express').Router();

// Controllers
const classroomController = require('../controllers/classroom/classroomController');
const settingsController = require('../controllers/classroom/settingsController');
const membersController = require('../controllers/classroom/membersController');
const lessonsController = require('../controllers/classroom/lessonsController');

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

router.post('/:id/lesson', memberClassroomMiddleware, teacherClassroomMiddleware, lessonsController.createLesson);
router.get('/:id/lessons', memberClassroomMiddleware, lessonsController.getLessons);
router.get('/:id/lesson/:lessonID', memberClassroomMiddleware, lessonsController.getLesson);
router.delete('/:id/lesson/:lessonID', memberClassroomMiddleware, teacherClassroomMiddleware, lessonsController.deleteLesson);
router.put('/:id/lesson/:lessonID', memberClassroomMiddleware, teacherClassroomMiddleware, lessonsController.updateLesson);

module.exports = router;