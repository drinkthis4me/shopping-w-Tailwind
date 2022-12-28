# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup, Develop, Production

```bash
npm install

npm run dev

npm run build
npm run preview

```

# Tailwind

Checkout Nuxt3 [official module for tailwind CSS](https://nuxt.com/modules/tailwindcss)

## Setup

1.  Install via package manager

```bash
npm install --save-dev @nuxtjs/tailwindcss
```

2. Add @nuxtjs/tailwindcss to the modules section of nuxt.config.ts

```js
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

3. (Optional) Create a tailwind.config.ts file in the root directory

## Editor Support

### 1. IntelliSense for VS Code
  
Download [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension for Visual Studio Code

Add the following configuration to your .vscode/settings.json file.

```json
// .vscode/settings.json
{
   "tailwindCSS.experimental.configFile": ".nuxt/tailwind.config.cjs",
   "files.associations": {
       "*.css": "tailwindcss"
     }
}
```

### 2.  Prettier plugin

Download official [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) for Tailwind CSS.

Add the following configuration
for VS code:

```json
// .vscode/settings.json
{
   "editor.quickSuggestions": {
    "strings": true
  }
}
```

Prettier will find tailwind.config.ts at the same dir as .prettierrc. If your config file is somewhere else, specify this using the tailwindConfig option.

```json
// .prettierrc
{
  "tailwindConfig": "./styles/tailwind.config.ts",
}
```

## Official plugins

[@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) plugin provides a basic reset for form styles that makes form elements easy to override with utilities

## Component library
[daisyui](https://daisyui.com/) can be installed as a Tailwind CSS plugin
