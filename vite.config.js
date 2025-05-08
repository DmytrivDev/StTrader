import { defineConfig } from 'vite';
import { globSync } from 'glob';
import sass from 'sass';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    root: 'src',

    base: './', // дозволяє використовувати шляхи типу /js/main.js і працює як локально, так і на Vercel

    publicDir: '../public', // щоб lang/*.json підтягувались правильно

    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },

    build: {
      outDir: '../dist',
      emptyOutDir: true,
      sourcemap: true,
      assetsDir: '', // ⬅️ ось це — винесе assets у корінь, а не в assets/
      rollupOptions: {
        input: globSync('./src/**/*.html'),
        preserveEntrySignatures: 'strict',
      },
    },

    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']), // щоб підхоплювало всі мовні сторінки при зміні
    ],

    css: {
      preprocessorOptions: {
        sass: {
          implementation: sass,
          additionalData: ` $class: &; `,
        },
      },
    },
  };
});
