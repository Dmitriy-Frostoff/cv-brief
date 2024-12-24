import changeLanguageTogglerHandler from './changeLanguageTogglerHandler';

/**
 * Listen document.body for 'pointerdown' event at label.language-switcher__label elements
 */
export default function changeLanguageToggler(): void {
  document.body.addEventListener('pointerdown', changeLanguageTogglerHandler);
}
