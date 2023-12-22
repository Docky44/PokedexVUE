import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonDetails from '../views/PokemonDetails.vue'
import CreateTeam from "../components/CreateTeam.vue"


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/create-team',
            name: 'CreateTeam',
            component: CreateTeam
        },

        {
          path: '/pokemon/:id',
          name: 'pokemon-details',
          component: PokemonDetails,
        }
    ]
})

export default router