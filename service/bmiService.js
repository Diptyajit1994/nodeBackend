const logger = require('../utils/logger').logger;

async function getAllPatientBMIReport(patientInfo){
    try {
        logger.info("Getting the following Patient Details: ", patientInfo);
        let patientBmiData = await calculateBMI(patientInfo);
        return {
            data: patientBmiData,
            success: true
        };
    } catch (e) {
        logger.error("Get patientinfo call couldn't be done due to",e);
        return {
            success: false,
            msg: "Something went wrong"
        };
    }
}
exports.getAllPatientBMIReport = getAllPatientBMIReport;

async function calculateBMI(pInfo){
    let count = 0;
    let patientInfo =pInfo;
    for (let i = 0; i<patientInfo.length; i++){
        let patient = patientInfo[i];
        let bmi = Number((patient.WeightKg / ((patient.HeightCm * patient.HeightCm) / 10000)).toFixed(2));
        let categoryRiskInfo = await calculateBMICategoryHealthRisk(bmi);
        patient['BMI'] = bmi;
        patient['BMI_CATEGORY'] = categoryRiskInfo.bmi_category;
        patient['HEALTH_RISK'] = categoryRiskInfo.health_risk;
        if (categoryRiskInfo.bmi_category == 'Overweight'){
            count++;
        }
    }
    return {patientBMIData: patientInfo , overweightCount: count};
}

async function calculateBMICategoryHealthRisk(bmi){
    let healthData = {
        bmi_category: '',
        health_risk: ''
    }
    switch(true){
		case bmi <= 18.4:
            healthData.bmi_category ='Underweight';
            healthData.health_risk = 'Malnutrition Risk'
		break;
        case bmi >= 18.5 && bmi <=24.9:
            healthData.bmi_category ='Normal Weight';
            healthData.health_risk = 'Low Risk'
		break;
        case bmi >= 24.5 && bmi <=29.9:
            console.log('bmi issss',bmi);
            healthData.bmi_category ='Overweight';
            healthData.health_risk = 'Enhanced Risk';
            console.log(healthData.bmi_category);
		break;
        case bmi >= 30 && bmi <=34.9:
            healthData.bmi_category ='Moderately Obese';
            healthData.health_risk = 'Medium Risk'
		break;
        case bmi >= 35 && bmi <=39.9:
            healthData.bmi_category ='Severel Obese';
            healthData.health_risk = 'High Risk'
		break;
        case bmi >= 40:
            healthData.bmi_category ='Very Severely Obese';
            healthData.health_risk = 'Very High Risk'
		break;

	}

    return healthData;
}
