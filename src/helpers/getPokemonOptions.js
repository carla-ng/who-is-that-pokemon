import pokemonApi from '@/api/pokemonApi'


// Creation of array of 650 (only 650 pokemon have svg in Pokemon API)
const getAllPokemon = () => {
    const pokemonArr = Array.from( Array(650) )
    return pokemonArr.map( ( _ , index) => index + 1 )
}


// Obtaining of 4 pokemon to add to our guessing options
const getPokemonOptions = async() => {
    const mixedPokemon = getAllPokemon().sort( () => Math.random() - 0.5 )
    const pokemons = await getPokemonNames( mixedPokemon.splice(0,4) )

    return pokemons
}


// Obtaining of names of 4 pokemon
const getPokemonNames = async( [a,b,c,d] = [] ) => {

    const promisesArray = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]

    const [ pokemon1, pokemon2, pokemon3, pokemon4 ] = await Promise.all( promisesArray )
    
    return [
        { name: pokemon1.data.name, id: pokemon1.data.id },
        { name: pokemon2.data.name, id: pokemon2.data.id },
        { name: pokemon3.data.name, id: pokemon3.data.id },
        { name: pokemon4.data.name, id: pokemon4.data.id }
    ]
}


export default getPokemonOptions