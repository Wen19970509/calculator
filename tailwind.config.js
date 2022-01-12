module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            lineHeight: {
                inherit: 'inherit',
            },
            fontFamily: {
                roboto: ['Roboto Mono', 'monospace'],
            },
        },
    },
    variants: {},
};
