import { z, defineCollection } from "astro:content";

const journalArticle = defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      journal: z.string(),
      date: z.coerce.date(),
      author: z.array(z.string()),
      volume: z.coerce.string(),
      issue: z.coerce.string().optional(),
      pages: z.coerce.string().optional(),
      year: z.coerce.string(),
      doi: z.string().optional()
    })
});

const otherPublication = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    with: z.string().optional(),
    description: z.string().optional(),
    published: z.string().optional(),
    date: z.coerce.date(),
    url: z.string().optional(),
  })
});

const conferencePresentation = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    conference: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    meetingdate: z.string(),
    type: z.string().optional(),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  publications: journalArticle,
  "other-publications": otherPublication,
  conferences: conferencePresentation,
};