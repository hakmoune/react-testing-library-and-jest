import { sum } from "./App";

test("Test de la fonction Sum", () => {
  const result = sum(3, 7);
  //expect(result).toBe(10);
  expect(result).toEqual(10);
});

describe("Test de la fonction Sum", () => {
  //On peut ytiliser it ou test
  it("Sould test 1+1", () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
  it("Should 4+9", () => {
    const result = sum(4, 9);
    expect(result).toBe(13);
  });
});
