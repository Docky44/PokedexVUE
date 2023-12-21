import axios from "axios";

async function fetchListPokemon() {
    console.log('fetchListPokemon');
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  }


  async function fetchDetailPokemon(url) {
    console.log('fetchDetailPokemon');
    const response = await axios.get(url);
    return response.data;
  }


  function fetchDetailListPokemon(list_url) {
    console.log('fetchDetailListPokemon');
    const promises = list_url.map(url => fetchDetailPokemon(url));
    return Promise.all(promises);
  }

    export { fetchListPokemon, fetchDetailPokemon, fetchDetailListPokemon };