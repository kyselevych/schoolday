const router = require('express').Router();

// Controllers
const classroomController = require('../controllers/classroom/classroomController');
const settingsController = require('../controllers/classroom/settingsController');
const membersController = require('../controllers/classroom/membersController');
const lessonsController = require('../controllers/classroom/lessonsController');
const solutionsController = require('../controllers/classroom/solutionsController');

// Middlewares
const memberClassroomMiddleware = require('../middleware/memberClassroomMiddleware');
const teacherClassroomMiddleware = require('../middleware/teacherClassroomMiddleware');
const lessonBelongToClassroomMiddleware = require('../middleware/lessonBelongToClassroomMiddleware');

const checkMember = [memberClassroomMiddleware]
const checkTeacher = [memberClassroomMiddleware, teacherClassroomMiddleware];
const checkLesson = [lessonBelongToClassroomMiddleware];

// Routes
router.post('/create', classroomController.createClassroom);
router.get('/list', classroomController.getClassroomsByUserId);
router.get('/:id', checkMember, classroomController.getClassroom);

router.post('/:id/member', checkTeacher, membersController.addMember);
router.delete('/:id/member', checkTeacher, membersController.removeMember);
router.get('/:id/members', checkMember, membersController.getMembers);

router.get('/:id/settings', checkTeacher, settingsController.getSettings);
router.put('/:id/settings', checkTeacher, settingsController.setSettings);

router.post('/:id/lessons', checkMember, lessonsController.getLessons);
router.post('/:id/formattedDays', checkMember, lessonsController.getDaysList);
router.get('/:id/lesson/:lessonID', checkMember, checkLesson, lessonsController.getLesson);
router.post('/:id/lesson', checkTeacher, lessonsController.createLesson);
router.delete('/:id/lesson/:lessonID', checkTeacher, checkLesson, lessonsController.deleteLesson);
router.put('/:id/lesson/:lessonID', checkTeacher, checkLesson, lessonsController.updateLesson);

router.post('/:id/lesson/:lessonID/solution', checkMember, checkLesson, solutionsController.addSolution);
router.get('/:id/lesson/:lessonID/solutions', checkMember, checkLesson, solutionsController.getListSolutions);
router.get('/:id/lesson/:lessonID/solution/:solutionID', checkTeacher, checkLesson, solutionsController.getSolution);
router.put('/:id/lesson/:lessonID/solution/:solutionID/estimate', checkTeacher, checkLesson, solutionsController.setGrade);

module.exports = router;