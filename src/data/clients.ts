/**
 * Clientes con los que has trabajado.
 * Añade o edita entradas aquí. Logo opcional: coloca imágenes en public/clients/ (ej. logo-marca.webp).
 */

export interface Client {
	id: string;
	name: string;
	/** Ruta del logo en public/ (ej. "/clients/logo-marca.webp"). Opcional. */
	logo?: string;
}

export const clients: Client[] = [
	{ id: "1", name: "Pasabordo" },
	{ id: "2", name: "Dareska" },
	{ id: "3", name: "Palmahía Records" },
	{ id: "4", name: "Emmus" },
	{ id: "5", name: "Riozz" },
	{ id: "6", name: "Rich Clothing" },
	{ id: "7", name: "Lava Express" },
	{ id: "8", name: "Oleo Lingerie" },
	{ id: "9", name: "Gama Active Wear" },
	{ id: "10", name: "Odontólogos Independientes" },
];
