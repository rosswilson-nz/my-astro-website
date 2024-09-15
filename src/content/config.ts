import { z, defineCollection, reference } from "astro:content";

const journalArticle = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      journal: z.string(),
      date: z.coerce.date(),
      author: z.array(z.string()),
      volume: z.coerce.string(),
      issue: z.coerce.string().optional(),
      pages: z.coerce.string(),
      year: z.coerce.string(),
      doi: z.string().optional()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  publications: journalArticle,
};