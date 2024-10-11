import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '0px', // Mobile devices
        sm: '768px', // Tablets
        md: '768px', // Tablets
        lg: '1024px', // Laptops
        xl: '1280px', // Desktops and bigger laptops
        '2xl': '1536px', // Large desktops
        '3xl': '1920px', // 2k monitors
        '4xl': '2560px', // 4k monitors
      },
      backgroundSize: {
        'full-cover': '100% 100%',
      },
      backgroundPosition: {
        'center-center': 'center center',
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-gray-gradient': 'radial-gradient(circle,#3a3a3a,#000000)', // Add this line
      },
      fontSize: {
        base: '16px', // Customizing text-base
        xl: '22px', // Customizing text-xl
        '2xl': '26px', // Example for text-2xl
        '3xl': '30px', // Example for text-3xl
        // You can add more custom sizes here
      },
    },
  },
  plugins: [],
};
export default config;
