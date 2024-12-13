require('ts-node/register');

const { globSync } = require('glob');
const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');
const { includes } = require('lodash');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
setWindowSize(1100, 1100);

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
       url: 'https://animated-gingersnap-8cf7f2.netlify.app/',
       show: true,
       browser: 'chromium',
       restart: true,
       waitForAction: 1000,
       fullPageScreenshots: true,
       uniqueScreenshotNames: true,
       keepBrowserState: true,
       trace: true,
       timeout: 30000,
      //  waitForNavigation: 'networkidle0',
       waitForTimeout: 30000,
 },
 },
 include: {
  ...require('./configs/pageConfig.ts'),
  ...require('./testData/data'),
 },
 mocha: {
     bail: true,
      reporterOptions: {
       'codeceptjs-cli-reporter': {
         stdout: '-',
         options: {
         verbose: false,
         steps: true,
       },
       },
      mochawesome: {
         stdout: './output/console.log',
          options: {
            reportDir: './output',
            reportFilename: 'report',
          },
        },
        'mocha-junit-reporter': {
          stdout: './output/console.log',
          options: {
            mochaFile: './output/result.xml',
            attachments: true, 
          },
        },
      },
   },
  gherkin: {
    features: ['./features/**/*.feature'], 
    steps: globSync('./step_definitions/**/*.steps.*', { dotRelative: true }),
  },
  plugins: {
   screenshotOnFail: {
     enabled: true,
   },
  heal: {
    enabled: true,
  },
  retryFailedStep: {
   enabled: true,
   retries: 4,
   minTimeout: 20000,
   maxTimeout: 50000,
  },
 }
  };
