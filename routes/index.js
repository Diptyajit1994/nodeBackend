const express = require('express');
const router = express.Router();
const logger = require('../utils/logger').logger;

router.get('/', async (req, res, next) => {
  try {
    logger.info('Server is running');
    var uptime = process.uptime();
    res.send({
      uptime: uptime
    });
  } catch (err) {
    {
      logger.error(err);
      res.status(400);
      res.send({
        success: false,
        msg: 'Something went wrong'
      });
    }
  }
});

module.exports = router;