<script setup>
import { RouterLink } from 'vue-router'
</script>
<style>
@import '../assets/css/style.css';

</style>

<script>

import {fetchDetailPokemon} from "../function";
export default {
  data() {
    return {
      pokemon: {
        id: 0,
        name: '',
        imageUrl: '',
        types: [{
          type: {
            name: ''
          }
        }]
    }
  };
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

<template>
  <li>
  <RouterLink :to="{ name: 'pokemon-details', params: { id: pokemon.id } }" class="pokemon-card">
    <img :src="imageUrl" :alt="pokemon.name" class="pokemon-image-card">
    <div class="pokemon-info">
        <p class="id">
            <span class="number-prefix">N°{{ pokemon.id }}</span>
        </p>
        <h5>{{ pokemon.name }}</h5>
        <div class="types">
          <span v-for="type in pokemon.types" :key="type" class="type" :class="type.type.name">{{ type.type.name }}</span>
        </div>
    </div>
  </RouterLink>
</li>
</template>
