import { getAllPokemon, getPokemonNames } from '@/helpers/getPokemonOptions'
import getPokemonOptions from '../../../../src/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {

    test('Must return an array of numbers', () => {
        const pokemon = getAllPokemon()

        expect ( pokemon.length ).toBe(650)
        expect ( pokemon[0] ).toBe(1)
        expect ( pokemon[649] ).toBe(650)
    })

    test('Must return an array of 4 elements with Pokemon names', async () => {
        const pokemon = await getPokemonNames([1,2,3,4])

        expect ( pokemon ).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ])
    })

    test('Must return a "shuffled" array with random values', async () => {
        const pokemon = await getPokemonOptions()

        expect ( pokemon.length ).toBe(4)
        expect ( pokemon ).toEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) }
          ])
    })

})