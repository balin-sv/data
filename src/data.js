// estas funciones son de ejemplo

// export const example = () => {
//   return "example";
// };

export const findName = (peopleArray, a) => {
  console.log(peopleArray);
  let coordinates = [];
  let counter = 0;
  for (let j = 0; j < peopleArray.length; j++) {
    console.log("new " + counter);
    for (let i = 0; i < peopleArray[j].length; i++) {
      let aux = peopleArray[j][i].name;

      if (aux.toUpperCase() === a.toUpperCase()) {
        coordinates.push(peopleArray[j][i]);
        coordinates.push(counter);
        coordinates.push(counter);
      }
    }

    counter++;
  }
  return coordinates;
};
