/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        64: '6.4rem',
        40: '4rem',
        30: '3rem',
        24: '2.4rem',
        20: '2rem',
        18: '1.8rem',
        16: '1.6rem',
        14: '1.4rem',
      },
      borderRadius: {
        40: '4rem',
      },
      gridTemplateColumns: {
        'project-45/55': '45fr 55fr',
        'project-55/45': '55fr 45fr',
        'project-25/75': '25fr 75fr',
      },
    },
  },
  plugins: [],
}
