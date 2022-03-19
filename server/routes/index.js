const router = require('express').Router();

const authRouter = require('./authRouter');
const classroomRouter = require('./classroomRouter');

router.use('/api/user/', authRouter);
router.use('/api/classroom/', classroomRouter);

module.exports = router;