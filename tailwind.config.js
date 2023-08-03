const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const theme = {
    dark: {
        100: '#252525',
        500: '#1e1e1e',
        900: '#121212',
    },
    light: {
        100: '#f5f5f5',
        500: '#ffffff',
    },
}
const primary = {
    100: '#5CBBFF',
    200: '#47B3FF',
    300: '#33AAFF',
    400: '#1FA2FF',
    500: '#0096FE',
    600: '#008FF5',
    700: '#0083E0',
    800: '#0077CC',
    900: '#006BB8',
}
module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                theme: ['Inter', ...defaultTheme.fontFamily.sans],
                redacted: ['Redacted-Regular'],
            },
            boxShadow: {
                'sidebar-shadow':
                    '3px 0px 4px rgba(0, 0, 0, 0.14), 3px 0px 3px rgba(0, 0, 0, 0.12), 1px 0px 8px rgba(0, 0, 0, 0.2)',
                'live-chat-shadow':
                    '-3px 0px 4px rgba(0, 0, 0, 0.14), -3px 0px 3px rgba(0, 0, 0, 0.12), -1px 0px 8px rgba(0, 0, 0, 0.2)',
                'header-shadow':
                    '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
                thumnails:
                    '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
            },
        },
        colors: {
            transparent: 'transparent',
            'body-bg': '#000000',
            'common-black': '#000',
            'common-white': '#fff',
            primary: primary,
            live: '#EC001F',
            danger: colors.red,
            theme: theme,
            interface: colors.neutral,
            success: colors.green,
        },
        screens: {
            '4xl': { max: '1700px' },
            // => @media (max-width: 700px) { ... }

            '3xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            '2xl': { max: '1399px' },
            // => @media (max-width: 1399px) { ... }

            xl: { max: '1299px' },
            // => @media (max-width: 1299px) { ... }

            lg: { max: '1199px' },
            // => @media (max-width: 1299px) { ... }

            md: { max: '1099px' },
            // => @media (max-width: 767px) { ... }

            ipad: { max: '900px' },
            // => @media (max-width: 767px) { ... }

            mobile: { max: '667px' },
            // => @media (max-width: 639px) { ... }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
