const fetchPokemon = require("./api");

describe("fetchPokemon", () => {
  it("returns the pokemon details", (done) => {
    fetchPokemon("charizard").then((pokemon) => {
      expect(pokemon.id).toEqual(6);
      done();
    });
  });
});
