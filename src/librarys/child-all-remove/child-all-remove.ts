export const childAllRemove = (element: HTMLElement): void => {
  let child = element.lastElementChild; 
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
};
