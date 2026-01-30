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
	{ id: "eventos-corporativos", name: "Eventos Corporativos" },
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

/** Videos y fotos del portafolio. session debe coincidir con el id de una sesión arriba. */
export const portfolioItems: MediaItem[] = [
	{
		id: "1",
		title: "Video",
		thumbnail: "/FedeVideo.mp4",
		videoUrl: "/FedeVideo.mp4",
		type: "video",
		session: "edicion-videos",
	},
	{
		id: "2",
		title: "Outdoor",
		thumbnail: "https://placehold.co/400x600/1a1a1a/69f0ae?text=Video+2",
		videoUrl: "#",
		type: "video",
		session: "contenido-marca",
	},
	{
		id: "ec-1",
		title: "Llados Fitness",
		thumbnail: "/eventos-corporativos/1.jpeg",
		type: "photo",
		session: "eventos-corporativos",
	},
	{
		id: "ec-2",
		title: "Santiago Ospina - XHobbies",
		thumbnail: "/eventos-corporativos/2.jpeg",
		type: "photo",
		session: "eventos-corporativos",
	},
	{
		id: "ec-3",
		title: "Feria Effix",
		thumbnail: "/eventos-corporativos/3.jpeg",
		type: "photo",
		session: "eventos-corporativos",
	},
	{
		id: "ec-4",
		title: "Feria Effix",
		thumbnail: "/eventos-corporativos/4.jpeg",
		type: "photo",
		session: "eventos-corporativos",
	},
	{
		id: "4",
		title: "Comercial",
		thumbnail: "https://placehold.co/400x600/1a1a1a/4fc3f7?text=Video+4",
		videoUrl: "#",
		type: "video",
		session: "moda-marcas",
	},
	{
		id: "6",
		title: "B-Roll",
		thumbnail: "https://placehold.co/600x400/1a1a1a/ffd54f?text=Horizontal+2",
		videoUrl: "#",
		type: "video",
		session: "moda-marcas",
	},
	{
		id: "7",
		title: "Foto 1",
		thumbnail: "/FedeFoto1.jpg",
		type: "photo",
		session: "edicion-videos",
	},
	{
		id: "8",
		title: "Foto 2",
		thumbnail: "/FedeFoto2.jpeg",
		type: "photo",
		session: "edicion-videos",
	},
];
