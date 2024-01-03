import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// Adjust the allow rule to include the directory where your CSS file is located
			allow: ['.', 'public']
		},
	},
});
