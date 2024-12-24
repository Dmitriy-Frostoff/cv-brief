/**
 * Handler for 'pointerdown' event on the EN - RU language switchers
 *  (input#EN-toggler and input#EN-toggler).
 * Handle the labels over inputs! Inputs are assumes to have 'appearence: none' property.
 *
 * @param {PointerEvent} event - pointer event (assume to be 'pointerdown' one)
 *  catched at the 'label.language-switcher__label' elements
 * @returns {void}
 * @throws event.target is null
 * @throws there's no HTML Element input#EN-toggler
 * @throws there's no HTML Element input#RU-toggler
 * @throws `Event.target ${event.target} is not label[class="language-switcher__label"`
 */
export default function changeLanguageTogglerHandler(
  event: PointerEvent,
): void {
  const ENToggler: HTMLInputElement | null =
    document.querySelector('#EN-toggler');

  const RUToggler: HTMLInputElement | null =
    document.querySelector('#RU-toggler');

  const RUElems: NodeListOf<Element> = document.querySelectorAll('.RU');
  const ENElems: NodeListOf<Element> = document.querySelectorAll('.EN');

  // check if event.target is null
  if (event.target === null) {
    throw new Error('event.target is null');
  }

  // check if event.target is HTMLElement
  if (event.target instanceof HTMLElement) {
    if (!event.target.closest('.language-switcher__label')) {
      return;
    }

    if (event.target.closest('.language-switcher__label')) {
      // check if label#EN-toggler exist
      if (!ENToggler) {
        throw new Error(`there's no HTML Element input#EN-toggler`);
      }

      // check if label#RU-toggler exist
      if (!RUToggler) {
        throw new Error(`there's no HTML Element input#RU-toggler`);
      }

      // get array of children of the label.language-switcher__label
      // for further usage
      /**
       *  @example
       *    [input#EN-toggler]
       *      0: input#EN-toggler
       *      length: 1
       *      [[Prototype]]: Array(0)
       *
       *    [input#EN-toggler]
       *      0: input#EN-toggler
       *      length: 1
       *      [[Prototype]]: Array(0)
       */
      const eventTargetChildrenArray: Element[] = Array.from(
        event.target.children,
      );

      // 'pointerdown' at label.language-switcher__label > input#EN-toggler
      if (eventTargetChildrenArray.includes(ENToggler)) {
        ENToggler.checked = true;
        RUElems.forEach((elem) => elem.classList.add('hidden'));
        ENElems.forEach((elem) => elem.classList.remove('hidden'));

        return;
      }

      // 'pointerdown' at label.language-switcher__label > input#RU-toggler
      if (eventTargetChildrenArray.includes(RUToggler)) {
        RUToggler.checked = true;

        ENElems.forEach((elem) => elem.classList.add('hidden'));
        RUElems.forEach((elem) => elem.classList.remove('hidden'));

        return;
      }
    }

    // if something went not in case => let it know
    throw new Error(
      `Event.target ${event.target} is not label[class="language-switcher__label"`,
    );
  }
}
