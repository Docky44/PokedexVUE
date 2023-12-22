<template>
  <input type="text" name="search" placeholder="Rechercher un Pokémon" class="px-4 py-2 rounded-md border-gray-300 outline-none ring-2 ring-blue-500 border-blue-500" v-model="search" @input="filterPokemon" />
  <section class="section pokedex-results">
    <ul class="results">
      <!-- si l'url n'est pas dans les listSearchPokemon, alors sa class est "hidden" -->
      <PokemonDetails v-for="pokemon in listDetailPokemon" :key="pokemon.url" :urlPokemon="pokemon.url" :class="{'hidden': !listSearchPokemon.includes(pokemon)}" />
    </ul>
  </section>
</template>

<script>
import PokemonDetails from '../components/AllPokemon.vue';

import {fetchListPokemon} from "../function";
export default {
  components: {
    PokemonDetails
  },
  data() {
    return {
      listDetailPokemon: [],
      listSearchPokemon: [],
      search: ''
    };
  },
  methods: {
    async fetchPokemon() {
      console.log('fetchPokemon');
      this.listDetailPokemon = await fetchListPokemon();
      this.filterPokemon();
      
    },
    filterPokemon() {
      console.log('filterPokemon');
      if (this.search) {
        this.listSearchPokemon = this.listDetailPokemon.filter(pokemon => pokemon.name.includes(this.search));
      } else {
        this.listSearchPokemon = this.listDetailPokemon;
      }
    }
  },

  created: function () {
    this.fetchPokemon();
  }
}
</script>
