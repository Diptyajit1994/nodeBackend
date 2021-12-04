const logger = require('../utils/logger').logger;

async function testResponse(){
    return 'Running';
}
exports.testResponse = testResponse;
