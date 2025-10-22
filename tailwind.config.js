/** @type {import('tailwindcss').Config} */
import shadeforge from 'shadeforge';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [shadeforge],
};
