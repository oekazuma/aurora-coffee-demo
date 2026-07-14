import { sveltekit } from '@sveltejs/kit/vite';
import { svelteVitals } from '@svelte-vitals/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), svelteVitals({ ui: true })]
});
