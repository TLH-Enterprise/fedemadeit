import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portfolio = defineCollection({
	loader: glob({ pattern: "**/*.yaml", base: "./src/content/portfolio" }),
	schema: z.object({
		title: z.string().optional(),
		type: z.enum(["video", "photo"]),
		/** Ruta de la imagen en src/assets/portfolio/. Solo para type "photo". Escrita por Pages CMS. */
		imageAsset: z.string().optional(),
		/** Poster del video. Solo para type "video". Opcional. */
		thumbnail: z.string().optional(),
		/** URL del video (YouTube u otra fuente). Solo para type "video". */
		videoUrl: z.string().optional(),
		session: z.string().optional(),
	}),
});

export const collections = { portfolio };
