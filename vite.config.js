import Inspect from 'vite-plugin-inspect'

export default {
  plugins: [
    Inspect()
  ],

  root: "./src",

  build: {
    outDir: "../dist/"
  },

  publicDir: "../public"
}