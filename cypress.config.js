const { defineConfig } = require('cypress')

module.exports = defineConfig({
    video: false,
    viewportWidth: 1366,
    viewportHeight: 768,

    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
        baseUrl: 'http://localhost:3000',
    },

    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
    },
})
