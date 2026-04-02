import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('AI SEO 專家'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const showcaseCollection = defineCollection({
  loader: async () => {
    const response = await fetch('https://api.stacksuite.dev/v1/web-builder/gallery');
    const json = await response.json();
    return json.data.items.map((item: any) => ({
      id: item.gallerySlug,
      title: item.galleryTitle,
      description: item.galleryDescription,
      industry: item.industry,
      companyName: item.companyName,
      style: item.style,
      screenshotUrl: item.screenshotUrl,
    }));
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    industry: z.string(),
    companyName: z.string(),
    style: z.string(),
    screenshotUrl: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  showcase: showcaseCollection,
};
