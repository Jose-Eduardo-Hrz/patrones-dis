import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PDS',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
			sidebar: [
				{
					label: 'Tareas',
					autogenerate: { directory: 'tareas' },
				},
			],
		}),
	],
});