const LT = require('@lambdatest/node-tunnel');
require('dotenv').config();

module.exports = async () => {
  const lt = new LT();

  await new Promise((resolve, reject) => {
    lt.stop((err) => {
      if (err) {
        console.error('Failed to stop LambdaTest Tunnel:', err);
        reject(err);
      } else {
        console.log('LambdaTest Tunnel stopped successfully.');
        resolve();
      }
    });
  });
};
