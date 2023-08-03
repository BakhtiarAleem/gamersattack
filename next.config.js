const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {
    /*
     * Compression should be handled by HTTP Proxy
     * We will be using cloudflare for our application
     * Removing the load from Node.js process to improve performance
     * Doc: https://nextjs.org/docs/api-reference/next.config.js/compression
     */
    compress: false,

    /*
     * Disable the powered by Next.js header
     * So that we do not expose that we are using Next.js
     * Doc: https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by
     */
    poweredByHeader: false,

    /*
     * React's Strict Mode is a development mode
     * only feature for highlighting potential problems in an application.
     * It helps to identify unsafe lifecycles, legacy API usage, and a number of other features.
     * Doc: https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
     */
    reactStrictMode: true,
}

const sentryWebpackPluginOptions = {
    /*
     * Suppresses all logs
     */
    silent: true,
}

/*
 * Make sure adding Sentry options is the last code to run before exporting, to
 * ensure that your source maps include changes from all other Webpack plugins
 */
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
