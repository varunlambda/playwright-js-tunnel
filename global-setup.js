const LT = require('@lambdatest/node-tunnel');
require('dotenv').config();

module.exports = async () => {
  const lt = new LT();
  const options = {
    user: 'varunkumarb',
    key: 'GhGShOYHz1jODWE9qDvkJK4nPDR3n2lc0gNp9VknalhwtUineG',
    logFile: '/.lambdatest/logs.txt'
  };

  await new Promise((resolve, reject) => {
    lt.start(options, (err) => {
      if (err) {
        console.error('Failed to start LambdaTest Tunnel:', err);
        reject(err);
      } else {
        console.log('LambdaTest Tunnel started successfully.');
        resolve();
      }
    });
  });
};
