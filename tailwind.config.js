/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            backgroundImage:{
                'day-background': "url('./../svg/backgrounds/day_time_lofi-min.png')",
                'night-background': "url('./../svg/backgrounds/night_time_lofi-min.png')"
            }
        },
        screens: {
            '2xl': {'max': '1536px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {'max': '1280px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {'max': '1024px'},
            // => @media (max-width: 1023px) { ... }

            'md': {'max': '768px'},
            // => @media (max-width: 767px) { ... }

            'sm': {'max': '640px'},
            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [],
}

