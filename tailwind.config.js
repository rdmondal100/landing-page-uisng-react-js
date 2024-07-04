/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neutraWhite' : '#FFF',
        'neutralSilver' : '#F5F7FA',
        'neutralBlack' : '#263238',
        'neutralDGrey' : '#4D4D4D',
        'neutralGrey' : '#717171',
        'Neutral-L_Grey' : '#717171',
        'lGrey': ' #89939E',
        'Neutral-Grey_Blue': '#ABBED1',
        'Brand-Primary': '#4CAF4F',
        'Brand-Secondary': '#263238',
        'Shade-S1': '#43A046',
        'Shade-S2': '#388E3B',
        'Shade-S3': '#237D31',
        'Shade-S4': '#1B5E1F',
        'Shade-S5': '#103E13',
        'Tint-T1': '#66BB69',
        'Tint-T2': '#81C784',
        'Tint-T3': '#A5D6A7',
        'Tint-T4': '#C8E6C9',
        'Tint-T5': '#E8F5E9',
        'Action-Warning': '#FBC02D',
        'Action-Error': '#E53835',
        'Action-Success': '#2E7D31',

      }
    },
  },
  plugins: [],
}