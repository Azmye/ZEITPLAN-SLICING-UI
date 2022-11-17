/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero-image': 'url(/src/assets/hero/bg-hero.svg)',
        'price-image': 'url(/src/assets/price/bg-price.svg)',
        'testi-image': 'url(/src/assets/testimonials/bg-testimonials.svg)',
      },
      colors: {
        primary: '#FE5E44',
        dark: '#0E144A',
      },
    },
  },
  plugins: [],
};
