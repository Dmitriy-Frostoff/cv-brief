import { readFileSync } from 'node:fs';

import path from 'path';

import jsdom from 'jsdom';

import getHTMLasString from '../../utilities/getHTMLasString/index';

const { JSDOM } = jsdom;

/**
 * Setups the envirinment before every test.
 * Renders 'index.html' and returns tuple with window and documnet for usage in the test.
 *
 * @returns {[jsdom.JSDOM['window'], jsdom.JSDOM['window']['document']]} - tuple with window and document
 *  from rendered 'index.html';
 * @throws {Error} - if 'index.html' is empty;
 */
function setupEnvironment(): [
  jsdom.JSDOM['window'],
  jsdom.JSDOM['window']['document'],
] {
  const htmlData = getHTMLasString(
    path,
    readFileSync,
    '../../../pages/index.html',
  );

  if (!htmlData) {
    throw new Error(`Empty htmlData`);
  }

  const { window } = new JSDOM(htmlData);
  const { document } = window;

  return [window, document];
}

describe('test case 1', () => {
  test(`div.language-switcher should be toBeInstanceOf HTMLDivElement`, () => {
    const [window, document] = setupEnvironment();

    expect(
      document.querySelector('.layout-two-columns.language-switcher'),
    ).toBeInstanceOf(window.HTMLDivElement);
  });
});
