import createComponent from "../core/createComponent.js";

export default (crud) => {
  const getCats = () => crud.database.cats;

  const addCat = (cat) => {
    crud.database.cats.push(cat);
    crud.updateDatabase();
    crud.saveLocalStorage();
    addCatDom(cat);
  };

  const container = createComponent("div", {
    classList: "container flex-center flex-col",
    style: `
        max-width: 800px;
    `,
  });

  const nameCat = createComponent("input");

  const buttonAddCat = createComponent("button", {
    innerHTML: "+",
    classList: "btn hvr-bounce-to-bottom success",
    eventlistener: {
      event: "click",
      function: (e) => {
        const cat = { name: nameCat.el.value };
        addCat(cat);
      },
    },
  });

  const editCatPanel = createComponent('div', {
    classList: "flex-row secondary"
  })


  editCatPanel.el.append(nameCat.el);
  editCatPanel.el.append(buttonAddCat.el);

  container.el.append(editCatPanel.el)

  const list = createComponent("div", {
    classList: "shadowhover secondary flex-col container",
  });

  const addCatDom = (cat) => {
    const item = createComponent("div", {
      classList: "animate-left flex-row container item",
      style: `
        margin-bottom: 2px;
        justify-content: space-around;
        flex-flow: row wrap;
        align-items: stretch;
      `,
    });

    const name = createComponent("div", {
      classList: "flex-center",
      style: "flex-grow: 2;",
      innerHTML: cat.name,
    });

    const btnDel = createComponent("button", {
      style: `
        flex-grow: 1;
      `,
      innerHTML: "X",
      classList: "btn hvr-bounce-to-bottom danger",
      eventlistener: {
        event: "click",
        function: () => {
          item.el.classList.add("animate-left-reverse");
          setTimeout(() => {
            item.el.remove();
          }, 400);

          crud.database.cats.splice(crud.database.cats.indexOf(cat), 1);
          crud.updateDatabase();
          crud.saveLocalStorage();
        },
      },
    });

    item.el.append(btnDel.el);
    item.el.append(name.el);

    list.el.prepend(item.el);
  };

  const refresh = () => {
    list.el.innerHTML = "";
    getCats().forEach((cat) => {
      addCatDom(cat);
    });
  };

  refresh();

  container.el.append(list.el);

  return container;
};


/*

vanilla
vue
react
preact
lit
svelte

*/
