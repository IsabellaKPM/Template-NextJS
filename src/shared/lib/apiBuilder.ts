export type RouteTree = {
  [key: string]: string | RouteTree | ((...args: any[]) => string);
};

export function group<T extends RouteTree>(
  prefix: string,
  routes: T,
): T & { base: string } {
  const result = { base: prefix } as any;

  for (const key in routes) {
    const item = routes[key];

    if (typeof item === "string") {
      result[key] = `${prefix}${item}`;
    } else if (typeof item === "function") {
      result[key] = (...args: any[]) => `${prefix}${item(...args)}`;
    } else if (typeof item === "object" && item !== null) {
      result[key] = group(`${prefix}`, item as RouteTree);
    }
  }

  return result;
}
