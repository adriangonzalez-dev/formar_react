
import { getTypePokemon } from '../../helpers'
import { usePokemon } from '../../hooks/usePokemon'
import { ModalCard,CardContent,CardTitle, CardDescription, CardTypes } from '../../styled-components/Modal'
import { Spinner } from '../Spinner/Spinner'

interface Props {
    name: string
}

export const Card = ({name}:Props) => {
   const {pokemon} = usePokemon({name})
  return (
    <ModalCard>
        {
            pokemon.isLoading 
            ? 
            <Spinner/> 
            :
            <>
                <CardTitle>{pokemon.data.name}</CardTitle>
                <CardContent>
                    <div>
                        <img src={pokemon.data.sprites.front_default} alt="" loading="lazy" />
                    </div>
                    <CardDescription>
                        <p><b>Weight:</b> {pokemon.data.height}</p>
                        <p><b>Abilities:</b>{pokemon.data.abilities.map((ability) => ability.ability.name).join(', ')}</p>
                        <p><b>Types:</b> {
                            pokemon.data.types.map((type, index) => 
                            <CardTypes 
                            style={{backgroundColor: getTypePokemon(type.type.name)}}
                            key={index}>
                                {type.type.name}
                            </CardTypes>
                            )}
                        </p>
                    </CardDescription>
                </CardContent>
            </>
        }
    </ModalCard>
  )
}
