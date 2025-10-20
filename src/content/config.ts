import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.coerce.date(),
    }),
});

export const collections = { articles };