/*

import createComponent from "./core/createComponent.js";

const myElement = createComponent("div", {
  style: `
    background-color: white;
  `,
  classList: "primary",
  eventlistener: {
    event: "click",
    function: (e) => {
      console.log("Click...", e.target);
    },
  },
});

console.log(myElement);

*/

const createElement = (elementName = "div", attributes = {}) => {
  const element = document.createElement(elementName);

  if (attributes.style) {
    attributes.style = attributes.style
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace(/\s{2,}/g, " ");
  }

  if (attributes.innerHTML) element.innerHTML = attributes.innerHTML;

  if (attributes.innerText) element.innerText = attributes.innerText;

  if (attributes.classList) {
    const classList = attributes.classList.split(" ");
    classList.forEach((item) => element.classList.add(item));
  }

  if (attributes.eventlistener) {
    let { eventlistener } = attributes;

    if (!Array.isArray(eventlistener)) {
      eventlistener = [eventlistener];
    }

    eventlistener.forEach((item) => {
      element.addEventListener(item.event, item.function, item.useCapture);
    });
  }

  const notAttributes = [
    "innerHTML",
    "innerText",
    "eventlistener",
    "classList",
  ];

  const attributesAsArray = Object.entries(attributes);

  attributesAsArray.forEach(([key, value]) => {
    if (!notAttributes.includes(key)) {
      element.setAttribute(key, value);
    }
  });

  return element;
};

export default (elementName, attributes) => ({
  el: createElement(elementName, attributes),
});
