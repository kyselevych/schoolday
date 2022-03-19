const router = require('express').Router();

const authRouter = require('./authRouter');
const classroomRouter = require('./classroomRouter');

const authMiddleware = require("../middleware/authMiddleware");

router.use('/api/user/', authRouter);
router.use('/api/classroom/', authMiddleware, classroomRouter);

module.exports = router;