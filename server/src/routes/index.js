const router = require('express').Router();
const { swaggerSpec } = require('../swagger');

router.use('/api', require('./api'));

router.get('/api-schema', (req, res) => {
  res.json(swaggerSpec);
});

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = router;