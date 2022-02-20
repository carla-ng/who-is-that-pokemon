import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage"
import { pokemons } from "../mocks/pokemon.mock"


describe('PokemonPage Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
    });


    test('Must match snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })


    test('Must call mixedPokemonArray when mounting', () => {
        const mixedPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixedPokemonArray')
        const wrapper = shallowMount( PokemonPage )

        expect ( mixedPokemonArraySpy ).toHaveBeenCalled()
    })


    test('Must match snapshot after loading Pokemon', () => {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
    })


    test('Must show PokemonPicture and PokemonOptions components', () => {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        expect( pokemonPicture.exists() ).toBeTruthy()

        const pokemonOptions = wrapper.find('pokemon-options-stub')
        expect( pokemonOptions.exists() ).toBeTruthy()

        expect( pokemonPicture.attributes('pokemonid') ).toBe('1')
        expect( pokemonOptions.attributes('pokemons') ).toBeTruthy()

    })


    test('Testing checkAnswer', async() => {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(1)

        expect( wrapper.find('h2').exists() ).toBeTruthy()
        expect( wrapper.vm.showPokemon ).toBe(true)
        expect( wrapper.find('h2').text() ).toBe(`Right answer! :) It's ${ pokemons[0].name }`)

        await wrapper.vm.checkAnswer(2)
        expect( wrapper.vm.message ).toBe(`Oops! Wrong answer :( It's ${ pokemons[0].name }`)

    })

})