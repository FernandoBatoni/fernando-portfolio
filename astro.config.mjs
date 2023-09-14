import { defineConfig } from 'astro/config';
import i18n from "astro-i18n";
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), i18n()],

  server: {
    port: 5000,
    host: true
  },

  
});
