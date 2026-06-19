/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'azul-electrico': '#0283E7',
        'azul-marino': '#061121',
        'naranja-ambar': '#FC7208',
        'gris-claro': '#F4F7FA',
        'texto-oscuro': '#061121',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
