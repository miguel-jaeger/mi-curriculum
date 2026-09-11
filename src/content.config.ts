import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing:  z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

const publicacionesSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type PublicacionesSchema = z.infer<typeof publicacionesSchema>;

const blogCollection = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
    schema: blogSchema,
});
const storeCollection = defineCollection({
    loader: glob({ base: "./src/content/store", pattern: "**/*.md" }),
    schema: storeSchema,
});
const publicacionesCollection = defineCollection({
    loader: glob({ base: "./src/content/publicaciones", pattern: "**/*.md" }),
    schema: publicacionesSchema,
});

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'publicaciones': publicacionesCollection
}