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
        screens: {
            sm: "640px", // Small devices (e.g., phones)
            md: "768px", // Medium devices (e.g., tablets)
            lg: "1024px", // Large devices (e.g., laptops/desktops)
            xl: "1280px", // Extra large devices (e.g., large desktops)
          },
        variants: {
            backdropBlur: ['responsive'],
        },
        plugins: [],
    }
};
