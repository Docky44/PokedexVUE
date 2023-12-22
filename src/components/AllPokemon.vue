<template>
  <div>
    <h3>{{ pokemon.name }}</h3>
    <p>ID: {{ pokemon.id }}</p>
    <img :src="imageUrl" :alt="pokemon.name" />
  </div>
</template>

<script>
import {fetchDetailPokemon} from "../function";
export default {
  data() {
    return {
      pokemon: {}
    }
  },
  props: {
    urlPokemon: {
      type: String,
      required: true
    }
  },
  methods: {
    async fetchPokemon() {
      console.log('fetchPokemon');
      this.pokemon = await fetchDetailPokemon(this.urlPokemon);
    }
  },
  computed: {
    imageUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`;
    }
  },
  created: function () {
    this.fetchPokemon();
  }
}
</script>
