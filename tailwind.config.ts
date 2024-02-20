import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#0b1623',
        primary: '#DEAD6F',
        banner: '#F9F3EC',
        'creame-white': '#FEF5EA',
        'gray-color': '#908F8D',
      },
    },
  },
  plugins: [],
};
export default config;
