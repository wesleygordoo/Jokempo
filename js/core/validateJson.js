export const validateJson = jsonString => {
  try {
    JSON.parse(jsonString);
  } catch (e) {
    console.log("JSON inválido.", e, jsonString);
    return false;
  }
  return true;
}
