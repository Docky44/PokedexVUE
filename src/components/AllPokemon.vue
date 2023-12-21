<template>
  <div>
    <h3>{{ pokemon.name }}</h3>
    <p>ID: {{ pokemon.id }}</p>
    <img :src="pokemon.imageUrl" :alt="pokemon.name" />
  </div>
</template>

<script>
import {fetchDetailPokemon} from "../function";
export default {
  data() {
    return {
      pokemon: fetchDetailPokemon(this.pokemon)
    }
  },
  props: {
    urlPokemon: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`;
    }
  }
}
</script>
