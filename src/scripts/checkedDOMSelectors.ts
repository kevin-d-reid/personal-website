export function checkedQuerySelector(
  parent: Element | Document, selector: string): Element {
  const el = parent.querySelector(selector);
  if (!el) {
    throw new ReferenceError(`Selector ${selector} didn't match any elements.`);
  }
  return el;
}

export function checkedGetElementById(
  parent: Document, elementId: string) {
  const el = parent.getElementById(elementId);
  if (!el) {
    throw new ReferenceError(`Element with ID ${elementId} not found.`);
  }
  return el;
}