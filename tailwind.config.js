/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            backgroundImage:{
                'day-background': "url('./../svg/backgrounds/day_time_lofi.png')",
                'night-background': "url('./../svg/backgrounds/night_time_lofi.png')"
            }
        },
    },
    plugins: [],
}

