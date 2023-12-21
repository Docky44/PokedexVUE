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
        <button @click="submitTeam">
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

button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>

