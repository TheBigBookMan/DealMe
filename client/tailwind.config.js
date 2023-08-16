/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/screens/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                "bg-dark": "#181818",
                "bg-light": "#282828",
                "bg-light-gray": "D9D9D9",
                "text-light-red": "F85922",
                "text-dark-red": "AE0008",
            },
        },
    },

    plugins: [],
};
