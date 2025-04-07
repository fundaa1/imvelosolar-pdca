/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './index.html',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#15803d',
                secondary: '#166534',
            },
        },
    },
    plugins: [],
} 