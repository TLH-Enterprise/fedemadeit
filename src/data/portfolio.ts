/**
 * Datos del portafolio: sesiones, videos y fotos.
 * Edita este archivo para agregar o quitar contenido.
 */

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

/** Videos y fotos del portafolio. session debe coincidir con el id de una sesión arriba.
 * Fotos: imageAsset = ruta WebP en src/assets/portfolio/.
 * Videos: videoUrl = URL directa (MP4, etc.) o URL de YouTube (watch?v=ID o youtu.be/ID). thumbnail = poster opcional. */
export const portfolioItems: MediaItem[] = [
	{
		id: "ec-1",
		title: "Llados Fitness",
		imageAsset: "eventos-corporativos/1.webp",
		type: "photo",
		session: "eventos-corporativos",
	},
	{
		id: "ec-2",
		title: "Santiago Ospina - XHobbies",
		imageAsset: "eventos-corporativos/2.webp",
		type: "photo",
		session: "eventos-corporativos",
	},
	{
		id: "ec-3",
		title: "Feria Effix",
		imageAsset: "eventos-corporativos/3.webp",
		type: "photo",
		session: "eventos-corporativos",
	},
	{
		id: "ec-4",
		title: "Feria Effix",
		imageAsset: "eventos-corporativos/4.webp",
		type: "photo",
		session: "eventos-corporativos",
	},
	{
		id: "es-1",
		title: "Seniors Prom",
		imageAsset: "eventos-sociales/1.webp",
		type: "photo",
		session: "eventos-sociales",
	},
	{
		id: "es-2",
		title: "Seniors Prom",
		imageAsset: "eventos-sociales/2.webp",
		type: "photo",
		session: "eventos-sociales",
	},
	{
		id: "es-3",
		title: "Seniors Prom",
		imageAsset: "eventos-sociales/3.webp",
		type: "photo",
		session: "eventos-sociales",
	},
	{
		id: "es-4",
		title: "Seniors Prom",
		imageAsset: "eventos-sociales/4.webp",
		type: "photo",
		session: "eventos-sociales",
	},
	{
		id: "es-5",
		title: "Seniors Prom",
		imageAsset: "eventos-sociales/5.webp",
		type: "photo",
		session: "eventos-sociales",
	},
	{
		id: "mm-1",
		title: "Oleo Lingerie | Ropa interior y de playa",
		videoUrl: "",
		type: "video",
		session: "moda-marcas",
	},
	{
		id: "mm-2",
		title: "Rich Clothing | Streetwear Designs",
		videoUrl: "",
		type: "video",
		session: "moda-marcas",
	},
	{
		id: "mm-3",
		title: "Isa Núñez | Vestidos de baño | Ropa de playa",
		videoUrl: "",
		type: "video",
		session: "moda-marcas",
	},
	{
		id: "mm-4",
		title: "Monkeys United",
		videoUrl: "",
		type: "video",
		session: "moda-marcas",
	},
	{
		id: "mm-5",
		title: "Rich Clothing | Streetwear Designs",
		imageAsset: "modas-marcas/1.webp",
		type: "photo",
		session: "moda-marcas",
	},
	{
		id: "mm-6",
		title: "Rich Clothing | Streetwear Designs",
		imageAsset: "modas-marcas/2.webp",
		type: "photo",
		session: "moda-marcas",
	},
	{
		id: "mm-7",
		title: "Rich Clothing | Streetwear Designs",
		imageAsset: "modas-marcas/3.webp",
		type: "photo",
		session: "moda-marcas",
	},
	{
		id: "mm-8",
		title: "Rich Clothing | Streetwear Designs",
		imageAsset: "modas-marcas/4.webp",
		type: "photo",
		session: "moda-marcas",
	},
	{
		id: "dj-1",
		title: "Djs y Videos Musicales",
		imageAsset: "dj-videos-musicales/1.webp",
		type: "photo",
		session: "djs-videos-musicales",
	},
	{
		id: "dj-2",
		title: "Djs y Videos Musicales",
		imageAsset: "dj-videos-musicales/2.webp",
		type: "photo",
		session: "djs-videos-musicales",
	},
	{
		id: "dj-3",
		title: "Djs y Videos Musicales",
		imageAsset: "dj-videos-musicales/3.webp",
		type: "photo",
		session: "djs-videos-musicales",
	},
	{
		id: "dj-4",
		title: "Djs y Videos Musicales",
		imageAsset: "dj-videos-musicales/4.webp",
		type: "photo",
		session: "djs-videos-musicales",
	},
	{
		id: "dj-5",
		title: "Djs y Videos Musicales",
		imageAsset: "dj-videos-musicales/5.webp",
		type: "photo",
		session: "djs-videos-musicales",
	},
	{
		id: "dj-6",
		title: "Djs y Videos Musicales",
		imageAsset: "dj-videos-musicales/6.webp",
		type: "photo",
		session: "djs-videos-musicales",
	},
	{
		id: "dj-7",
		title: "Djs y Videos Musicales",
		imageAsset: "dj-videos-musicales/7.webp",
		type: "photo",
		session: "djs-videos-musicales",
	},
	{
		id: "dj-8",
		title: "Djs y Videos Musicales",
		imageAsset: "dj-videos-musicales/8.webp",
		type: "photo",
		session: "djs-videos-musicales",
	},
	{
		id: "cm-1",
		title: "Lava Express",
		videoUrl: "https://www.youtube.com/shorts/FETLrvFdYBA",
		type: "video",
		session: "contenido-marca",
	},
	{
		id: "cm-2",
		title: "Servi Express",
		videoUrl: "https://www.youtube.com/shorts/ffP9fjh5a7w",
		type: "video",
		session: "contenido-marca",
	},
	{
		id: "cm-3",
		title: "Choris Grill Amor y Amistad",
		videoUrl: "https://www.youtube.com/shorts/WVJsHPr_42k",
		type: "video",
		session: "contenido-marca",
	},
	{
		id: "ev-1",
		title: "Edición de videos",
		videoUrl: "",
		type: "video",
		session: "edicion-videos",
	},
	{
		id: "ev-2",
		title: "Edición de videos",
		videoUrl: "",
		type: "video",
		session: "edicion-videos",
	},
];
