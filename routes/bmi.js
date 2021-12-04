const express = require('express');
const router = express.Router();
const logger = require('../utils/logger').logger;
const patientInfo = require('../inputFile/patientInfo.json');
const bmiService = require('../service/bmiService');

//get api call to fetch patient bmi details 
router.get('/all-patient-info', async (req, res, next) => {
  try {
    logger.info('fetch all patient bmi information');
    let patientData = await bmiService.getAllPatientBMIReport(patientInfo)
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

// post ami to calculate patient BMI informations
router.post('/calculate-patient_BMI-info', async (req, res, next) => {
    try {
      logger.info('calculate all patient bmi information');
      let patientData = await bmiService.getAllPatientBMIReport(req.body)
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