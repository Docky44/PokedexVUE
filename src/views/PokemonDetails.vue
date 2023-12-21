<template>
    <div>
      <h1>Détails du Pokémon {{ pokemon.name }}</h1>
  
      <!-- Utilisation du composant PokemonCard avec les données du Pokémon -->
      <PokemonCard :pokemon="pokemon" />  
    </div>
  </template>
  
  <script>
  import PokemonCard from "@/components/PokemonCard.vue";
  
  export default {
    props: {
    },
    data() {
      return {
        pokemon: {} // Les données du Pokémon seront récupérées dynamiquement
      };
    },
    created() {
      // Récupérez les données du Pokémon en utilisant le paramètre d'URL
      const pokemonId = this.$route.params.id;
  
      fetch(`https://api.pokemon.com/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
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