const router = require('express').Router();

const authRouter = require('./authRouter');

router.use('/user', authRouter);

module.exports = router;