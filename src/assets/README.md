# Assets (imágenes WebP)

- **`portfolio/`** – Fotos del portafolio en WebP. Subcarpetas según sesión:
  - `eventos-corporativos/` → 1.webp, 2.webp, 3.webp, 4.webp
  - `eventos-sociales/` → social1.webp … social5.webp
  - `modas-marcas/` → moda1.webp … moda4.webp
- **`hero/`** – Imagen del hero (ej. `FedeFoto.webp`).

Convierte tus JPEG/PNG a WebP y coloca aquí los archivos con estos nombres; el sitio los usará automáticamente.

**Calidad recomendada (ej. en Squoosh):** Quality **90–95**. Así casi no se pierde detalle y el sitio sigue cargando bien. En el proyecto, las imágenes se sirven con calidad 95.

Los **videos** no van aquí: se sirven desde un CDN. En `src/data/portfolio.ts` cada ítem de tipo `video` tiene `videoUrl` (URL del CDN). Sustituye `https://tu-cdn.com/...` por tus URLs reales (Vimeo, Bunny, etc.). Opcionalmente usa `thumbnail` para la URL del poster.
