

const getPokemons = () =>{
    const pokemonsArr = Array.from( Array(650) )
    return pokemonsArr.map((_, index ) =>index + 1)
} 

const getPokemonsOptions = () =>{
    console.log(getPokemons())
}

export default getPokemonsOptions