export type RouteTree = {
  [key: string]: string | RouteTree | ((...args: never[]) => string);
};

export function group<T extends RouteTree>(
  prefix: string,
  routes: T,
): T & { base: string } {
  const result: Record<string, unknown> = { base: prefix };

  for (const key in routes) {
    const item = routes[key];

    if (typeof item === "string") {
      result[key] = `${prefix}${item}`;
    } else if (typeof item === "function") {
      const fn = item as (...args: never[]) => string;
      result[key] = (...args: never[]) => `${prefix}${fn(...args)}`;
    } else if (typeof item === "object" && item !== null) {
      result[key] = group(prefix, item as RouteTree);
    }
  }

  return result as T & { base: string };
}
