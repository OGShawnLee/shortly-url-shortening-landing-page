import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    colors: {
      blue: {
        900: 'hsl(255, 11%, 22%)',
      },
      cyan: 'hsl(180, 66%, 49%)',
      red: 'hsl(0, 87%, 67%)',
      gray: 'hsl(0, 0%, 75%)',
      violet: {
        300: 'hsl(257, 7%, 63%)',
        400: 'hsl(257, 12%, 59%)',
        700: 'hsl(257, 27%, 26%)',
        900: 'hsl(260, 8%, 14%)',
      },
      white: 'hsl(0, 100%, 100%)',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
});
