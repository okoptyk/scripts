// src/config/link.ts
// Prefix an internal path with Astro's configured base, exactly once.
// Routes get a trailing slash (site uses trailingSlash: 'always'); file
// assets (anything with an extension, e.g. images/scripts) must NOT, or the
// server would treat them as directories and 404.
export function link(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  if (!clean) return `${base}/`;
  const isFile = /\.[a-z0-9]+$/i.test(clean);
  return isFile ? `${base}/${clean}` : `${base}/${clean}/`;
}
