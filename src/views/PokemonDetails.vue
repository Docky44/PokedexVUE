<template>
    <div>
      <h1>Détails du Pokémon {{ pokemon.name }}</h1>
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img :src="pokemon.imageUrl" :alt="pokemon.name" />
  
        <h2>{{ pokemon.name }}</h2>
        <p>Attaque: {{ pokemon.stats.attack }}</p>
        <p>Défense: {{ pokemon.stats.defense }}</p>
        <p>Vitesse: {{ pokemon.stats.speed }}</p>
      </div>
    </div>
  </template>
  
  
  <script>
    import {fetchDetailPokemon} from "../function";
  export default {
    props: {
    },
    data() {
        console.log("test");
      return {
        pokemon: {
          name: '',
          imageUrl: '',
          stats: {
            attack: 0,
            defense: 0,
            speed: 0
          }
        }
      };
    },
    created() {
      // Récupérez les données du Pokémon en utilisant le paramètre d'URL
      this.fetchPokemon();
    },
    methods: {
      async fetchPokemon() {
        console.log('fetchPokemon');
        const pokemonDetail = await fetchDetailPokemon("https://pokeapi.co/api/v2/pokemon/" + this.$route.params.id + "/");
        console.log(pokemonDetail);
        this.pokemon = {
          name: pokemonDetail.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.$route.params.id}.png`,
          stats: {
            attack: pokemonDetail.stats[1].base_stat,
            defense: pokemonDetail.stats[2].base_stat,
            speed: pokemonDetail.stats[5].base_stat
          }
        };
      }
    }
  };
  </script>