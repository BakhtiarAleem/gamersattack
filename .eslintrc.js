module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        'next',
        'google',
        'prettier',
        'eslint:recommended',
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:lodash/recommended',
        'plugin:cypress/recommended',
        'plugin:promise/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['import', 'lodash', 'promise', 'cypress', 'prettier'],
    rules: {
        'no-var': 'error',
        'no-alert': 'error',
        'max-lines': 'error',
        'max-depth': 'error',
        'no-shadow': 'error',
        'no-console': 'error',
        'no-debugger': 'error',
        'require-jsdoc': 'off',
        'react/prop-types': 'off',
        'prefer-arrow-callback': 'error',
        'react/react-in-jsx-scope': 'off',
        'max-statements-per-line': 'error',
        'lodash/prefer-lodash-method': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'max-lines-per-function': ['error', 250],
        'import/no-anonymous-default-export': 'error',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.js', '.jsx'],
            },
        },
    },
    overrides: [
        {
            files: ['cypress/integration/*/*.spec.js'],
            rules: {
                'promise/always-return': 'off',
                'max-lines-per-function': 'off',
                'promise/catch-or-return': 'off',
            },
        },
    ],
}
