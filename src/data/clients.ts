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
	{ id: "1", name: "Rich Clothings" },
	{ id: "2", name: "Lava Express" },
	{ id: "3", name: "Servi Express" },
	{ id: "4", name: "Urban Company Studio" },
	{ id: "5", name: "Emmus" },
	{ id: "6", name: "Choris Grill" },
	{ id: "7", name: "Oleo Lingerie" },
];
