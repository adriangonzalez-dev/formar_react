import { useEffect, useState } from 'react'
import { Pokemon, PokemonResponse } from '../interfaces/pokemon-interface'
import { getPokemon } from '../api/pokemons'

interface Props {
    name: string
}


export const usePokemon = ({name}:Props) => {
    const [pokemon, setPokemon] = useState<PokemonResponse>({
        data: {} as Pokemon,
        isLoading: true,
    })

    const getPokemonApi = async (name:string) => {
        const data:Pokemon = await getPokemon(name)
        setPokemon({
            data,
            isLoading: false,
        })
    }

    useEffect(() => {
        getPokemonApi(name)
    }, [name])
  return {pokemon}
}
