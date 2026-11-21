import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this repository from /CyberPulse/ instead of the domain root.
  base: command === 'build' ? '/CyberPulse/' : '/',
  plugins: [react()],
}));
