import { defineCollection, reference, z } from "astro:content";

// const blog = defineCollection({
//   type: "content",
//   // Type-check frontmatter using a schema
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//     featureImage: z.string().optional(),
//     author: reference("authors")
//   })
// });

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featureImage: z.string().optional(),
    author: reference("authors")
  })
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional()
  })
});

export const collections = { blog, authors };
