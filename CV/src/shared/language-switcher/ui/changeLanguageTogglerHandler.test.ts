import { readFileSync } from 'node:fs';

import path from 'path';

import jsdom from 'jsdom';

import getHTMLasString from '../../utilities/getHTMLasString/index';

import setupUnitTestsEnvironment from '../../utilities/setupUnitTestEnvironment/index';

describe('test case 1', () => {
  test(`div.language-switcher should be toBeInstanceOf HTMLDivElement`, () => {
    const [window, document] = setupUnitTestsEnvironment(
      jsdom,
      getHTMLasString,
      path,
      readFileSync,
      '../../../pages/index.html',
    );

    expect(
      document.querySelector('.layout-two-columns.language-switcher'),
    ).toBeInstanceOf(window.HTMLDivElement);
  });
});
