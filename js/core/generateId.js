export const generateId = (
  numberOfCharacters = 20,
  startWithALetter = true,
  onlyLowercase = false
) => {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  let id = "";
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  for (let index = 0; index < numberOfCharacters; index++) {
    let typeCharacter = getRandomIntInclusive(1, 3);

    if (index == 0) {
      if (startWithALetter) {
        typeCharacter = getRandomIntInclusive(2, 3);
      }
    }

    if (typeCharacter === 1) {
      // 1 = numero
      id += getRandomIntInclusive(0, 9);
    }
    if (typeCharacter === 2) {
      // 2 = letra minuscula
      id += abc[getRandomIntInclusive(0, 25)];
    }
    if (typeCharacter === 3) {
      // letra maiuscula
      id += abc[getRandomIntInclusive(0, 25)].toUpperCase();
    }
  }

  if (onlyLowercase) {
    id = id.toLocaleLowerCase();
  }
  return id;
};
