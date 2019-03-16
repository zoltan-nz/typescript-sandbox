module.exports = {
  launch: {
    devtools: true,
    dumpio: false,
    headless: process.env.HEADLESS !== 'false',
    // slowMo: 250
  },
  // server: [
  //   {
  //     command: 'npm run test:acceptance:static:serve',
  //     port: 5000,
  //     launchTimeout: 10000,
  //     debug: true,
  //   },
  //   {
  //     command: 'npm run test:acceptance:react:serve',
  //     port: 3000,
  //     launchTimeout: 10000,
  //     debug: true,
  //   },
  // ],
  exitOnPageError: false,
};
