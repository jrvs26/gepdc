/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backdropBlur: {
                md: '4px',
            },
            animation: {
                textFade: 'textFade 5s ease infinite',
            },
            keyframes: {
                textFade: {
                    '0%, 100%': {
                        opacity: '0',
                        transform: 'translateY(-20px)',
                    },
                    '50%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
        },
        variants: {
            backdropBlur: ['responsive'],
        },
        plugins: [],
    }
};
