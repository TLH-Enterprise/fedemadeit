/**
 * Datos del portafolio: sesiones, videos y fotos.
 * Edita este archivo para agregar o quitar contenido.
 */

export interface MediaItem {
	id: string;
	title?: string;
	thumbnail: string;
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
	{ id: "vertical", name: "Formato Vertical" },
	{ id: "horizontal", name: "Formato Horizontal" },
	{ id: "comercial", name: "Comercial" },
	{ id: "eventos", name: "Eventos" },
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

/** Videos y fotos del portafolio. Añade tus URLs de thumbnail y video. */
export const portfolioItems: MediaItem[] = [
	{
		id: "1",
		title: "Proyecto YouTube",
		thumbnail: "https://placehold.co/400x600/1a1a1a/4fc3f7?text=Video+1",
		videoUrl: "#",
		type: "video",
		session: "vertical",
	},
	{
		id: "2",
		title: "Outdoor",
		thumbnail: "https://placehold.co/400x600/1a1a1a/69f0ae?text=Video+2",
		videoUrl: "#",
		type: "video",
		session: "vertical",
	},
	{
		id: "3",
		title: "Inmobiliaria",
		thumbnail: "https://placehold.co/400x600/1a1a1a/ffd54f?text=Video+3",
		videoUrl: "#",
		type: "video",
		session: "vertical",
	},
	{
		id: "4",
		title: "Comercial",
		thumbnail: "https://placehold.co/400x600/1a1a1a/4fc3f7?text=Video+4",
		videoUrl: "#",
		type: "video",
		session: "vertical",
	},
	{
		id: "5",
		title: "Entrevista",
		thumbnail: "https://placehold.co/600x400/1a1a1a/69f0ae?text=Horizontal+1",
		videoUrl: "#",
		type: "video",
		session: "horizontal",
	},
	{
		id: "6",
		title: "B-Roll",
		thumbnail: "https://placehold.co/600x400/1a1a1a/ffd54f?text=Horizontal+2",
		videoUrl: "#",
		type: "video",
		session: "horizontal",
	},
	{
		id: "7",
		title: "Foto 1",
		thumbnail: "https://placehold.co/400x600/1a1a1a/4fc3f7?text=Foto+1",
		type: "photo",
		session: "vertical",
	},
	{
		id: "8",
		title: "Foto 2",
		thumbnail: "https://placehold.co/400x600/1a1a1a/69f0ae?text=Foto+2",
		type: "photo",
		session: "vertical",
	},
];
