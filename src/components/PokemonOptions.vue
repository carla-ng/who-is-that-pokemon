<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons"
                :key="pokemon.id"
                @click="$emit( 'pokemonSelection', pokemon.id )"
            >
                <span>{{ pokemon.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 50px 0 0 0;
        padding: 0;
    }
    li {
        background-color: white;
        border-radius: 5px;
        border: 2px solid #000;
        cursor: pointer;
        font-weight: 600;
        letter-spacing: 2px;
        margin-bottom: 10px;
        width: 300px;
        padding: 2px;
    }

    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    span {
        border: 2px solid #000;
        color: #000;
        display: block;
        font-family: Verdana, Geneva, sans-serif; 
        padding: 16px;
        text-transform: capitalize
    }

    .options-container {
        display: flex;
        justify-content: center;
    }
</style>