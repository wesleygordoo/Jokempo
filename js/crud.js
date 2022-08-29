/*

import Crud from "./crud.js";

const crud = Crud("template-teste-js");

document.addEventListener("update-database", () => {
  // Actions here...
  console.log("Update database ...")
});

// Exemplos

const getName = () => crud.database.name
const setName = name => {
  crud.database.name = name
  crud.updateDatabase()
  crud.saveLocalStorage()
}

const getList = () => crud.database.list
const addItem = item => {
  crud.list.push(item)
  crud.updateDatabase()
  crud.saveLocalStorage()
}

*/
export default (key) => {
  const defaultData = {name: "Wesley Gordoo", cats: []};

  const initData = (key) => {
    const jsonDataLocalStorage = localStorage.getItem(key);
    if (jsonDataLocalStorage) {
      const databaseLocalStorage = JSON.parse(jsonDataLocalStorage);
      return { ...defaultData, ...databaseLocalStorage };
    } else {
      return defaultData;
    }
  };

  const crud = {};

  crud.updateDatabase = () => {
    document.dispatchEvent(
      new Event("update-database")
    );
  };

  crud.database = initData(key);

  crud.saveLocalStorage = () => {
    const jsonData = JSON.stringify(crud.database);
    localStorage.setItem(key, jsonData);
  };

  return crud;
};
