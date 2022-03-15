// pass an element and a class name and check if the elements passed has the passed class
export const hasClass = (element, className) => {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
} 

