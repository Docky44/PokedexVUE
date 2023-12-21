<script>
import {fetchListPokemon} from "../function";
export default {
  data() {
    return {
      detailPokemon: {},
      listDetailPokemon: [],
    }
  },
  methods: {
    fetchPokemon() {
      this.listDetailPokemon = fetchListPokemon();
    }
  },
  
  created: function () {
    this.fetchPokemon();
  }
}
</script>

<template>
  <div></div>
</template>
