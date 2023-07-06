const router = require('express').Router();
const {errorHandlerMiddleware} = require('../../middlewares/errorHandler');

router.use('/compounds', require('./compounds'));

router.use(errorHandlerMiddleware);
module.exports = router;