<script>
import axios from 'axios'
export default {
  data() {
    return {
      detailPokemon: {},
      listDetailPokemon: [],
    }
  },
  methods:
    {
      fetchListPokemon() {
        console.log('fetchListPokemon');
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
          .then(response => {
            this.listDetailPokemon = response.data.results;
          })
          .catch(error => {
            console.log(error);
          })
      },
    },
  created: function () {
    this.fetchListPokemon();
  }
}
</script>

<template>
  <div></div>
</template>
