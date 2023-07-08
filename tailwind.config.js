'use strict';

const colors = require('tailwindcss/colors');
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        fontFamily: { sans: ['Volotea Sans', ...defaultTheme.fontFamily.sans]},
        extend: {
            height: {200: '50rem', ...defaultTheme.height},
            screens: {
                '3xl': '1792px',
                '4xl': '2048px'
            },
            spacing: {
                128: '32rem',
                160: '40rem',
                192: '48rem',
                224: '56rem',
                256: '64rem',
                288: '72rem',
                320: '80rem',
                352: '88rem',
                384: '96rem'
            },
            colors: {
                colors,
                v7: {DEFAULT},
                discord: {
                    DEFAULT: 'hsl(235,86%,65%)',
                    dark: 'hsl(235,60%,54%)'
                },
            },
            zIndex: {'-10': '-10'},
            typography: {
                '2xl': {
                    css: {
                        'maxWidth': '73ch',
                        'h1, h2, h3, h4, h5, h6': { fontWeight: 'bold', marginBottom: '1.2rem'},
                        'h1': { fontSize: '4rem'},
                        'h2': {fontSize: '3rem'},
                        'h3': {fontSize: '2rem'},
                        'iframe': {width: '100%', height: '60vh'}
                    },
                },
            },
        },
    },
    plugins: [
        require('@ahdcreative/voloteavirtual-tailwind-config'),
        require('@tailwindcss/typography')
    ]
}