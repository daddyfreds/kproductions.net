import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const premieres = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/premieres' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    summary: z.string(),
    draft: z.boolean(),
    chapters: z.array(z.object({
      title: z.string(),
      description: z.string(),
      media: z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
      }).optional(),
    })),
  }),
});

export const collections = { premieres };
