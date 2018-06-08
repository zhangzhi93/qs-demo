export function getElementById(id) {
  return document.getElementById(id);
}

export function createElements(str, todom) {
  todom = todom || document.body;
  const htmlPattern = /(?<=<)\w+(?=\s?)/,
    arr = str.match(htmlPattern),
    content = str.match(/(?<=>).+(?=<\/)/);
  let dom = document.createElement(arr[0]),
    attrs = str.match(/(\w+)\s*=\s*(".*?")/g);
  dom.textContent = content;
  attrs = attrs || [];
  attrs.forEach((item, index) => {
    const attr = item.split('=');
    dom.setAttribute(attr[0], attr[1].substring(1, attr[1].length - 1));
  });
  todom.appendChild(dom);
  return dom;
}
