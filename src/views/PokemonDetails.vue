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
      // Récupérez les données du Pokémon en utilisant le paramètre d'URL
      const pokemonId = this.$route.params.id;
  
      fetch(`https://api.pokemon.com/v2/pokemon/${pokemonId}`)
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
  };
  </script>