import { z, defineCollection } from 'astro:content';

const wifiFreeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    images: z.array(
      z.object({
        url: z.string(),
        caption: z.string().optional(),
      })
    ).optional(),
    features: z.array(z.string()).optional(),
    price: z.string().optional(),
  }),
});

export const collections = {
  'wifi-free': wifiFreeCollection,
};