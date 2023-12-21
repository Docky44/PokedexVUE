<template>
    <div class="create-team">
        <h2>Create your Pokemon Team</h2>
        <div class="team">
            <pokemon-selector
            v-for="(pokemon,index) in team"
            :key="index"
            :pokemon-id="pokemon.id"
            @update-pokemon="updatePokemon(index,$event)"
            ></pokemon-selector>
        </div>
        <button @click="submitTeam" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Submit team
        </button>
    </div>
</template>
<script>

import PokemonCard from "./PokemonCard.vue"

export default{
    name: "CreateTeam",
    components:{
        PokemonCard
    },
    data(){
        return{
            team: Array(6).fill({id:null}) // Team of 6 Pokemons
        };
    },
    methods:{
        updatePokemon(index,pokemonId){
            this.team[index].id = pokemonId;
        },
        submitTeam(){
            console.log('Team Submitted:', this.team);
        }
    }
}
</script>
<style scoped>
.create-team {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.team {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.text-white:hover{
    cursor: pointer;
}
</style>

