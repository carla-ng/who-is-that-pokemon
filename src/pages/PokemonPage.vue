<template>
    <div id="app-inner-container">
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
            message: '',
            disabledFlag: false
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

            if (!this.disabledFlag) {
                this.disabledFlag = true
                let pokemonName = (this.pokemon.name).charAt(0).toUpperCase() + (this.pokemon.name).slice(1)

                if (selectedId == this.pokemon.id ) {
                    this.message = `Right answer! :) It's ${ pokemonName }`
                } else {
                    this.message = `Oops! Wrong answer :( It's ${ pokemonName }`
                }
            }
        },
        newGame() {
            this.showPokemon  = false
            this.showAnswer   = false
            this.pokemonArr   = []
            this.pokemon      = null
            this.disabledFlag = false

            this.mixedPokemonArray()
        }
    },
    mounted() {
        this.mixedPokemonArray()
    }
}
</script>

<style scoped>
    h1 {
        color: #000;
        font-family: Verdana, Geneva, sans-serif;
        letter-spacing: 2px;
        margin-bottom: 35px;
    }

    h2 {
        color: #000;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 20px;
        letter-spacing: 2px;
        margin-top: 30px;
        padding: 0 12px
    }

    button {
        background-color: white;
        border-radius: 5px;
        border: 2px solid #000;
        color: #000;
        cursor: pointer;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 2px;
        margin: 10px 0 ;
        width: 200px;
        padding: 12px;
    }

    button:hover {
        background-color: rgba(56, 119, 255, 0.548);
    }
</style>
