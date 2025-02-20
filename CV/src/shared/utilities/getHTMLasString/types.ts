export type GetHTMLasStringType = (
  NodeJSPathModule: typeof import('node:path'),
  NodeJSReadFileSync: typeof import('node:fs').readFileSync,
  relativePath: string,
) => string | null;
