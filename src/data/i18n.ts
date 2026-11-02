// Every page has an English twin at `${path}/en` (home: `/en`).
export type Locale = "id" | "en";

export const localeFromPath = (path: string): Locale =>
  path.endsWith("/en") ? "en" : "id";

/** The Indonesian path of any page: `/apps/x/en` → `/apps/x`, `/en` → `/`. */
export const basePath = (path: string) =>
  localeFromPath(path) === "en" ? path.slice(0, -3) || "/" : path;

/** `/apps/x` → `/apps/x/en`, `/#apps` → `/en#apps`. */
export function localePath(locale: Locale, path: string) {
  if (locale === "id") return path;
  const [p, hash] = path.split("#");
  return (p === "/" ? "/en" : `${p}/en`) + (hash ? `#${hash}` : "");
}
