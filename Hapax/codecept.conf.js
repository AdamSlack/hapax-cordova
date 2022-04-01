const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './mobile_tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: './platforms/android/app/build/outputs/apk/debug/app-debug.apk',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    I: './mobile_tests/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Hapax'
}