const express = require('express');
const router = express.Router();
const logger = require('../utils/logger').logger;
const houseInfo = require('../inputFile/houses.json');

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

router.get('/house-info', (req,res,next)=>{
  try {
    logger.info('Get houseinfo fetch is running');
    const houseData= houseInfo;
    res.status(200).send({
      success: true,
      data: houseData
    })

  } catch (error) {
    logger.error(err);
    res.status(400);
    res.send({
      success: false,
      msg: 'Something went wrong'
    });
  }
})

module.exports = router;