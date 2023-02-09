import createComponent from "./core/createComponent.js";
import nestElements from "./core/nestElements.js";
import Crud from "./crud.js";
import ListaGatos from "./components/listaGatos.js";

// teste em codigo de app
const crud = Crud("template-teste-js");

const getName = () => crud.database.name;

export default () => {
  const container = createComponent("div", {
    classList: "container animate-opacity",
  });

  const listaGatos = ListaGatos(crud);

  container.el.append(listaGatos.el);
  return container;
};
