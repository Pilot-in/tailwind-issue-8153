module.exports = {
    'content': ['./safelist.txt'],
    'safelist': [
        'flex',
    ],
    'theme': {
        'screens': {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px'
        },
        'container': {
            'center': true,
            'padding': {
                'DEFAULT': '1rem'
            }
        },
        'colors': {
            'transparent': 'transparent',
            'current': 'currentColor',
            'black': '#002529',
            'white': '#ffffff',
            'gray': {
                'DEFAULT': '#A0AEC0',
                '100': '#F8FAFC',
                '200': '#EDF2F7',
                '300': '#E1E7EF',
                '400': '#CCD6E0',
                '500': '#A0AEC0',
                '600': '#728197',
                '700': '#4A5568',
                '800': '#2D3748',
                '900': '#1A212D'
            },
            'primary': {
                'DEFAULT': '#FF3333',
                '300': '#FFD3D1',
                '400': '#F78178',
                '500': '#FF3333',
                '600': '#DD2C2C'
            },
            'secondary': {
                'DEFAULT': '#13565E',
                '100': '#F6F9F9',
                '200': '#E0F3F5',
                '300': '#BADFE3',
                '400': '#1A6B74',
                '500': '#13565E',
                '600': '#00292E'
            },
            'info': {
                'DEFAULT': '#2F97ED',
                '200': '#E3F5FF',
                '500': '#2F97ED',
                '700': '#0F62A8'
            },
            'warning': {
                'DEFAULT': '#FFC93E',
                '200': '#FEFCBF',
                '500': '#FFC93E',
                '700': '#C07E1A'
            },
            'error': {
                'DEFAULT': '#E73434',
                '200': '#FED7D7',
                '500': '#E73434',
                '700': '#AE1616'
            },
            'success': {
                'DEFAULT': '#2fbe2c',
                '200': '#c9f3da',
                '500': '#2fbe2c',
                '700': '#067503'
            }
        },
        'fontFamily': {
            'primary': [
                '"Baloo 2"',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'sans-serif'
            ]
        },
        'extend': {
            'spacing': {
                '50':'12.5rem',
                '62.5':'15.625rem',
                '75':'18.75rem',
                '87.5':'21.875rem',
                '100':'25rem',
                '112.5':'28.125rem',
                '125':'31.25rem',
                '137.5':'34.375rem',
                '150':'37.5rem',
                '195': '48.75rem',
            },
            'letterSpacing': {
                'lg': '3.6px',
                'xl': '5.4px'
            },
            'borderRadius': {
                '5xl': '20rem',
            }
        }
    },
};
