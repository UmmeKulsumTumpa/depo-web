// tailwind.config.js

// Import necessary plugins using ESM syntax
import daisyui from 'daisyui';
import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
export default {
  // Specify the paths to all of your template files
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  // Extend the default Tailwind theme
  theme: {
    extend: {},
  },
  
  // Register plugins
  plugins: [daisyui, lineClamp],
  
  // Optional: Configure daisyUI themes or other plugin-specific settings
  daisyui: {
    themes: ["light", "dark"], // Example themes
  },
};
