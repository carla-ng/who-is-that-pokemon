import { shallowMount } from "@vue/test-utils"
import PokemonOptions from "@/components/PokemonOptions"
import { pokemons } from "../mocks/pokemon.mock"


describe('PokemonOptions Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
        props: {
            pokemons: pokemons,
        },
        });
    });

    
    test('Must match snapshot', () => {
    
        expect( wrapper.html() ).toMatchSnapshot();

        /*
        expect( wrapper.html() ).toMatchInlineSnapshot(`
        <div class="options-container">
            <ul>
            <li>bulbasaur</li>
            <li>ivysaur</li>
            <li>charizard</li>
            <li>blastoise</li>
            </ul>
        </div>
        `);
        */

    })


    test('Must show the 4 options correctly', () => {

        const liTags = wrapper.findAll('li')
        expect( liTags.length ).toBe(4)

        expect( liTags[0].text() ).toBe('bulbasaur')
        expect( liTags[1].text() ).toBe('ivysaur')
        expect( liTags[2].text() ).toBe('charizard')
        expect( liTags[3].text() ).toBe('blastoise')

    })


    test('Must emit "selection" with its respective params when clicked', () => {

        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect( wrapper.emitted('pokemonSelection').length ).toBe(4)
        expect( wrapper.emitted('pokemonSelection')[0] ).toEqual([1])
        expect( wrapper.emitted('pokemonSelection')[1] ).toEqual([2])
        expect( wrapper.emitted('pokemonSelection')[2] ).toEqual([6])
        expect( wrapper.emitted('pokemonSelection')[3] ).toEqual([9])

    })

});
