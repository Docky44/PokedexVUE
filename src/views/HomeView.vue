<template>
  <div>
    <PokemonDetails v-for="pokemon in listDetailPokemon" :key="pokemon.url" :urlPokemon="pokemon.url" />
  </div>
</template>

<script>
import axios from 'axios';
import PokemonDetails from '../components/AllPokemon.vue';

import {fetchListPokemon} from "../function";
export default {
  components: {
    PokemonDetails
  },
  data() {
    return {
      listDetailPokemon: []
    };
  },
  methods: {
    fetchPokemon() {
      this.listDetailPokemon = fetchListPokemon();
    }
  },

  created: function () {
    this.fetchPokemon();
  }
}
</script>
