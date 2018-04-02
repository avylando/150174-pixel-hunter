const renderPageFromTemplate = (template) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(template, `text/html`);

  if (doc.body.childNodes.length > 1) {
    const fragment = document.createDocumentFragment();
    doc.body.childNodes.forEach((node) => {
      fragment.appendChild(node);
    });

    return fragment;
  }

  return doc.body.firstElementChild;
};

const changeDisplay = (content) => {
  const app = document.querySelector(`.central`);
  const prevPage = app.querySelector(`#main`);

  if (prevPage) {
    prevPage.remove();
  }

  app.insertAdjacentElement(`afterBegin`, content);
};


export {renderPageFromTemplate, changeDisplay};
