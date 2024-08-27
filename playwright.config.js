require('dotenv').config();

const config = {
  // testDir: 'specs',
  // timeout: 60000,
  workers: 1,
  globalSetup: require.resolve('./global-setup'),
  globalTeardown: require.resolve('./global-teardown'),
  use: {
    baseURL: 'https://example.com', // Change to your target URL
    browserName: 'chromium', // Can be 'chromium', 'firefox', or 'webkit'
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    contextOptions: {
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
    },
    trace: 'on',
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify({
          browserName: 'chrome',
          browserVersion: 'latest',
          'LT:Options': {
            platform: 'Windows 10',
            tunnel: true,
            build:'Playwright-Tunnel - One',
            user: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
          },
        })
      )}`
    }
  },
  projects: [
    {
      name: 'LambdaTest',
      testDir: './specs',
    },
  ],
};

module.exports = config;
