/**
 * Datos del portafolio: sesiones, videos y fotos.
 *
 * Las fotos y videos individuales del portafolio (portfolioItems) ya NO se editan aquí:
 * viven como archivos en src/content/portfolio/, editables sin tocar código desde el
 * panel de Pages CMS (ver .pages.yml). Este archivo solo define las categorías (sessions)
 * y utilidades para transformar esos datos.
 */
import type { CollectionEntry } from "astro:content";

export interface MediaItem {
	id: string;
	title?: string;
	/** Ruta del WebP en src/assets/portfolio/ (ej. "eventos-corporativos/1.webp"). Solo para type "photo". */
	imageAsset?: string;
	/** URL del poster del video. Solo para type "video". Opcional. */
	thumbnail?: string;
	/** URL del video (CDN o pública). Solo para type "video". */
	videoUrl?: string;
	type: "video" | "photo";
	session?: string;
}

export interface Session {
	id: string;
	name: string;
	description?: string;
}

export interface Program {
	id: string;
	name: string;
	abbr: string;
	color: string;
}

export const sessions: Session[] = [
	{ id: "eventos-corporativos", name: "Eventos Corporativos" },
	{ id: "eventos-sociales", name: "Eventos sociales" },
	{ id: "moda-marcas", name: "Moda y marcas" },
	{ id: "djs-videos-musicales", name: "Djs y Videos Musicales" },
	{ id: "contenido-marca", name: "Contenido de marca" },
	{ id: "edicion-videos", name: "Edición de videos" },
];

/** Programas que usas, agrupados por categoría */
export const programCategories: { title: string; programs: Program[] }[] = [
	{
		title: "Edición de video",
		programs: [
			{ id: "ae", name: "After Effects", abbr: "Ae", color: "#2d2d7a" },
			{ id: "pr", name: "Premiere Pro", abbr: "Pr", color: "#4a148c" },
		],
	},
	{
		title: "Edición de fotografía",
		programs: [
			{ id: "ps", name: "Photoshop", abbr: "Ps", color: "#0d47a1" },
			{ id: "lr", name: "Lightroom", abbr: "Lr", color: "#01579b" },
		],
	},
	{
		title: "Diseño e ilustración",
		programs: [
			{ id: "ai", name: "Illustrator", abbr: "Ai", color: "#bf360c" },
		],
	},
];

/** IDs de los 3 trabajos destacados que se muestran en la home. Edita este array para cambiar cuáles aparecen. */
export const featuredPortfolioIds: string[] = ["ec-1", "ec-2", "mm-2"];

/**
 * Convierte una entrada de la colección "portfolio" (src/content/portfolio/*.yaml,
 * editada desde Pages CMS) al shape MediaItem que usan los componentes de la UI.
 */
export function toMediaItem(entry: CollectionEntry<"portfolio">): MediaItem {
	return { id: entry.id, ...entry.data };
}

/** Devuelve los 3 items destacados en el orden definido en featuredPortfolioIds. */
export function getFeaturedPortfolioItems(items: MediaItem[]): MediaItem[] {
	const byId = Object.fromEntries(items.map((i) => [i.id, i]));
	return featuredPortfolioIds.map((id) => byId[id]).filter(Boolean);
}
