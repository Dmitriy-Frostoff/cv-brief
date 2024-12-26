/**
 * Get string representaion of the HTML file via given relative path
 *  (system path insensitve because of the 'path.resolve' from node.js usage)
 * Note!: 'path' and 'readFileSync' from node.js required!
 *
 * @param {typeof import('node:path')} NodeJSPathModule - node.js path;
 * @param {typeof import('node:fs').readFileSync} NodeJSReadFileSync - node.js readFileSync;
 * @param {string} relativePath - path, relative to the current executed file;
 * @returns {string | null } - string representation of the HTML file or 'null' if an error occur while file reading;
 * @throws {Error} - if the HTML data is empty;
 */
export default function getHTMLasString(
  NodeJSPathModule: typeof import('node:path'),
  NodeJSReadFileSync: typeof import('node:fs').readFileSync,
  relativePath: string,
): string | null {
  try {
    const htmlData = NodeJSReadFileSync(
      NodeJSPathModule.resolve(__dirname, relativePath),
      {
        encoding: 'utf8',
      },
    );

    if (!htmlData) {
      throw new Error(`htmlData is empty!`);
    }

    return htmlData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error occur: ${error.message}`);
    }

    return null;
  }
}
