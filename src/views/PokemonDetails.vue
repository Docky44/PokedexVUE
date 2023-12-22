<template>
  <div>
    <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Détails du Pokémon {{ pokemon.name.toUpperCase() }}</h1>
    <PokemonCard :pokemon="pokemon" />
  </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue"
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
  },
  components: {
    PokemonCard
  }
};
</script>