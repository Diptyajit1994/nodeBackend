const express = require('express');
const router = express.Router();
const logger = require('../utils/logger').logger;
const bmiService = require('../service/bmiService');

router.get('/all-patient-info', async (req, res, next) => {
  try {
    logger.info('fetch all patient bmi information');
    let patientData = await bmiService.getAllPatientBMIReport()
    if (patientData.success == true) {
        res.status(200).send({
            data: patientData.data,
            success: true
        });
    } else {
        res.status(400).send({
            success: false,
            msg: patientData.msg
        });
    }
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