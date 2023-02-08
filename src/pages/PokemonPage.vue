<template>
    
        <h1>Quién es este Pokemon? </h1>
        <PokemonPicture :PokemonId="10" :showPokemon="true"/>
        <PokemoOption/>
    
</template>

<script>

import PokemoOption from '@/components/PokemoOption.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemonOption from '@/helpers/getPokemonOptions.js'

console.log(getPokemonOption())

export default {
  components: { PokemoOption, PokemonPicture}

}
</script>
