<template>
  <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img :src="pokemon.imageUrl" :alt="pokemon.name" />
    <h2 class="">{{ pokemon.name }}</h2>
    <p>Attaque: {{ pokemon.stats.attack }}</p>
    <p>Défense: {{ pokemon.stats.defense }}</p>
    <p>Vitesse: {{ pokemon.stats.speed }}</p>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
};
</script>