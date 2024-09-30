import preset from 'tailwind-config/tailwind';
import type { Config } from 'tailwindcss';

export default {
  content: ["src/**/*.svelte"],
  presets: [preset],
} satisfies Config
