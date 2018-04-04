const createContentFromString = (stringTemplate) => {
  const element = document.createElement(`template`);
  element.innerHTML = stringTemplate;
  return element.content;
};

const changeDisplay = (content) => {
  const display = document.querySelector(`#main`);
  display.innerHTML = ``;
  display.appendChild(content);
};


export {createContentFromString, changeDisplay};
