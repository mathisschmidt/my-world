import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { articles };