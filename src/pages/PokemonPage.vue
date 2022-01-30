<template>
    <h1 v-if="!pokemon">Please wait...</h1>

    <div v-else>
        <h1>Who is this Pokémon?</h1>
    
        <PokemonPicture
            :pokemonId="pokemon.id"
            :showPokemon="showPokemon"
        />

        <PokemonOptions
            :pokemons="pokemonArr"
            @pokemonSelection="checkAnswer"
        />

        <div v-if="showAnswer" class="fade-in">
            <h2>{{ message }}</h2>
            <button @click="newGame"> Play again </button>
        </div>
    </div>

</template>


<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixedPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const randomInt = Math.floor ( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ randomInt ]
        },
        checkAnswer( selectedId ) {
            this.showPokemon = true
            this.showAnswer  = true

            if (selectedId == this.pokemon.id ) {
                this.message = `Right answer! :) It's ${ this.pokemon.name }`
            } else {
                this.message = `Oops! Wrongs answer :( It's ${ this.pokemon.name }`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer  = false
            this.pokemonArr  = []
            this.pokemon     = null

            this.mixedPokemonArray()
        }
    },
    mounted() {
        this.mixedPokemonArray()
    }
}
</script>
