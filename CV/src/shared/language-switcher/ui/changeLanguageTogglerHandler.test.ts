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

describe('functional tests', () => {
  test(`page with content was loaded`, async () => {
    const [window, document] = setupUnitTestsEnvironment(
      jsdom,
      getHTMLasString,
      path,
      readFileSync,
      '../../../pages/index.html',
    );

    return new Promise((resolve, reject) => {
      window.onload = () => {
        try {
          // check that page was fully loaded with resourses
          expect(document.readyState).toBe('complete');

          // check that all the page's chunks were loaded with styles
          const headerElem: HTMLElement | null =
            document.querySelector('header');

          if (headerElem === null) {
            throw new Error(`headerElem is empty (headerElem is null)`);
          }

          expect(window.getComputedStyle(headerElem).display).not.toBe('none');

          const mainElem: HTMLElement | null = document.querySelector('header');

          if (mainElem === null) {
            throw new Error(`mainElem is empty (mainElem is null)`);
          }

          expect(window.getComputedStyle(mainElem).display).not.toBe('none');

          window.close();
          resolve('test completed!');
        } catch (error) {
          if (error instanceof Error) {
            reject(error);
          }
        }
      };
    });
  });
});
