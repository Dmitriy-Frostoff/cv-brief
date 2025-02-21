import type { GetHTMLasStringType } from '../getHTMLasString/types';

/**
 * Setups the envirinment before every test.
 * Renders 'index.html' and returns tuple with window and documnet for usage in the test.
 * Note: { resources: 'usable' } enables the css styles load.
 *  Check the [jsdom Basic options](https://github.com/jsdom/jsdom#basic-options) for more.
 *
 * @param {import('jsdom')} jsdomModule - JSDOM module from JSDOM library
 * @param {GetHTMLasStringType} getHTMLasString - callback for getting
 *  string representaion of the HTML file via given relative path
 * @param {typeof import('node:path')} NodeJSPathModule - node.js path;
 * @param {typeof import('node:fs').readFileSync} NodeJSReadFileSync - node.js readFileSync;
 * @param {string} relativePath - path, relative to the current executed file;
 * @returns {[import('jsdom').JSDOM['window'], import('jsdom').JSDOM['window']['document']]} - tuple with window and document
 *  from rendered 'index.html';
 * @throws {Error} - if 'index.html' is empty;
 */
export default function setupUnitTestsEnvironment(
  jsdomModule: typeof import('jsdom'),
  getHTMLasString: GetHTMLasStringType,
  NodeJSPathModule: typeof import('node:path'),
  NodeJSReadFileSync: typeof import('node:fs').readFileSync,
  relativePath: string,
): [
  import('jsdom').JSDOM['window'],
  import('jsdom').JSDOM['window']['document'],
] {
  const { JSDOM } = jsdomModule;

  const htmlData = getHTMLasString(
    NodeJSPathModule,
    NodeJSReadFileSync,
    relativePath,
  );

  if (!htmlData) {
    throw new Error(`Empty htmlData`);
  }

  const { window } = new JSDOM(htmlData, { resources: 'usable' });
  const { document } = window;

  return [window, document];
}
