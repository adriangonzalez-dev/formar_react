import { useEffect, useState } from "react"
import { CardContent } from "./CardContent";
import { CardContainer, CardContainerContent, CardImage, CardTitle } from '../../styled-components/Card';
import { PokemonResponse, Pokemon, Ability } from '../../interfaces/pokemon-interface';
import { getPokemon } from "../../api/pokemons";
import { Spinner } from "../Spinner/Spinner";
import { InputDelete } from "./InputDelete";

interface Props {
    name: string
}

export const Card = ({name}:Props) => {
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

  return (
      <CardContainer >
        {
            pokemon.isLoading
            ?
                <Spinner/>
            :
                  <>
                      <CardTitle>
                          {pokemon.data.name}
                      </CardTitle>
                      <InputDelete id={pokemon.data.id} name={pokemon.data.name}/>
                      <CardImage src={pokemon.data.sprites.front_default} alt="" loading="lazy" />
                      <CardContainerContent >
                          <CardContent weight={pokemon.data.height} abilities={pokemon.data.abilities} />
                      </CardContainerContent>
                  </>
        }
          
      </CardContainer> 
  )
}
