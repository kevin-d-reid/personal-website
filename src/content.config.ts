import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blogposts = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blogposts" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      dateUploaded: z.date(),
      dateModified: z.date().optional(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      category: z.string(),
      tags: z.array(z.string()),
      status: z.enum(["published", "draft", "template"])
    })
});

export const collections = { blogposts };