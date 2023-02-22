const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("returns Fizzbuzz if divisble by both 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it("returns fizz if divisble by only 3", () => {
    expect(fizzbuzz(9)).toBe("Fizz");
  });

  it("returns buzz if divisble by only 5", () => {
    expect(fizzbuzz(20)).toBe("Buzz");
  });
  it("returns the number if not divisible by either 3 or 5", () => {
    expect(fizzbuzz(8)).toBe(8);
  });
});
