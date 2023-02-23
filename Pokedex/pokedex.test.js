const Pokedex = require("./pokedex");
const fetchPokemon = require("./api");

describe("Pokedex", () => {
  it("adds Pikachu to pokedex", async () => {
    const pokedex = new Pokedex();
    const pikachu = await fetchPokemon("pikachu");
    pokedex.catch(pikachu);
    expect(pokedex.all()).toEqual(["pikachu"]);
  });

  it("adds two Pokemons to pokedox", async () => {
    const pokedex = new Pokedex();
    const pikachu = await fetchPokemon("pikachu");
    const raichu = await fetchPokemon("raichu");
    pokedex.catch(pikachu);
    pokedex.catch(raichu);
    expect(pokedex.all()).toEqual(["pikachu", "raichu"]);
  });
});
