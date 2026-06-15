// src/config/link.ts
// Prefix an internal path with Astro's configured base, exactly once.
export function link(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}/` : `${base}/`;
}
