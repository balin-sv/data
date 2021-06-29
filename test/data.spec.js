import { example, anotherExample, findName } from "../src/data.js";
import data from "../src/data/ghibli/ghibli";

let peopleArray = [];
for (let i = 0; i < data.films.length; i++) {
  peopleArray.push(data.films[i].people);
}

describe("findeName", () => {
  it("debe retornar un array que contiene 3 elementos", () => {
    let result = findName("San", peopleArray);
    expect(result).toHaveLength(3);
  });
});
