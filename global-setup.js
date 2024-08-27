const LT = require('@lambdatest/node-tunnel');
require('dotenv').config();

module.exports = async () => {
  const lt = new LT();
  const options = {
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY
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
