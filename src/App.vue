<template>
  <PokemonPage />
</template>

<script>
import PokemonPage from './pages/PokemonPage'

export default {
  name: 'App',
  components: {
    PokemonPage
  }
}
</script>

<style>
    #app {
      border-radius: 5px;
      border: 2px solid #000;
      text-align: center;
      color: #2c3e50;
      margin: 20px auto;
      max-width: 600px;
      padding: 4px;
    }

    #app-inner-container {
      border-radius: 5px;
      border: 2px solid #000;
      padding: 15px;
    }
</style>
