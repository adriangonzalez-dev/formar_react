import { useEffect, useState } from 'react'
import { Pokemon, PokemonResponse } from '../interfaces/pokemon-interface'
import { getPokemon } from '../api/pokemons'

interface Props {
    name: string
}

interface InitialState {
    data: Pokemon,
    isLoading: boolean,
}

const initialState:InitialState = {
    data: {} as Pokemon,
    isLoading: true,
}

export const usePokemon = ({name}:Props) => {
    const [pokemon, setPokemon] = useState<PokemonResponse>(initialState)

    const getPokemonApi = async (name:string):Promise<void> => {
        const data:Pokemon = await getPokemon(name)
        setPokemon({
            data,
            isLoading: false,
        })
    }

    useEffect(() => {
        getPokemonApi(name)
    }, [name])

  return { pokemon }
}
