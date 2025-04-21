import { z, defineCollection } from 'astro:content';

const itineraryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    cover: z.string(),
  }),
});

export const collections = {
  itinerary: itineraryCollection,
}; 