import { defineConfig } from 'vite';
import { globSync } from 'glob';
import sass from 'sass';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    root: 'src',

    base: '', // дозволяє використовувати шляхи типу /js/main.js і працює як локально, так і на Vercel

    publicDir: '../public', // щоб lang/*.json підтягувались правильно

    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },

    build: {
      outDir: '../dist',
      emptyOutDir: true,
      sourcemap: true,

      rollupOptions: {
        input: globSync('./src/**/*.html'), // білд усіх .html, включно з pl/contact.html

        preserveEntrySignatures: 'strict', // дозволяє зберегти ієрархію у dist/

        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo =>
            chunkInfo.name === 'commonHelpers' ? 'commonHelpers.js' : '[name].js',
        },
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
