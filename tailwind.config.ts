import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  plugins: [require('@tailwindcss/forms')({strategy: 'class'}), require('daisyui')],
  daisyui: {
    themes: ['pastel','dark'],
  },
  safelist: [
    {
      pattern: /bg-(gray)-(200|900)/
    },
    {
      pattern: /ring-(gray)-(400|900)/
    }
  ]
}
