class Pokedex {
  constructor() {
    this.pokemonList = [];
  }

  catch(newPokemon) {
    this.pokemonList.push(newPokemon.name);
  }

  all() {
    return this.pokemonList;
  }
}

module.exports = Pokedex;
