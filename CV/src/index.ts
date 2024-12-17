import './app/index';
import logSelfCheck from './shared/CVSelfCheck/index';
import changeLanguageToggler from './shared/language-switcher/ui/index';

window.addEventListener('load', () => {
  logSelfCheck();
  changeLanguageToggler();
});
