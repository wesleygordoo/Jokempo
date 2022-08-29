const nestElements = (mounting, container = null) => {
  if (!container) container = docuupdateDatabasement.querySelector("#main");

  mounting.forEach(({ el, children }) => {
    container.append(el);
    if (children) nestElements(children, el);
  });
};

export default nestElements;
