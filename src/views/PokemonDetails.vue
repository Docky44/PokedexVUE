<template>
    <div>
      <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Détails du Pokémon {{ pokemon.name.toUpperCase() }}</h1>
      <PokemonCard :pokemon="pokemon" />
    </div>
  </template>
  
  <script>
  import PokemonCard from "@/components/PokemonCard.vue"
  export default {
    props: {
    },
    data() {
        console.log("test");
      return {
        pokemon: {} 
      };
    },
    created() {
      // Je récupère les données du Pokémon en utilisant le paramètre d'URL
      const pokemonId = this.$route.params.id;
  
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

          this.pokemon = {
            name: data.name,
            imageUrl: data.sprites.front_default,
            stats: {
              attack: data.stats[1].base_stat,
              defense: data.stats[2].base_stat,
              speed: data.stats[5].base_stat
            }
          };
        })
        .catch(error => console.error('Erreur lors de la récupération des données du Pokémon', error));
    },
    components: {
    PokemonCard
  }
  };
  </script>