import { CardContent } from "./CardContent";
import { InputDelete } from "./InputDelete";
import { 
    CardContainer, 
    CardContainerContent, 
    CardImage, 
    CardTitle } from '../../styled-components/Card';
import { Spinner } from "../index";
import { usePokemon } from "../../hooks";
interface Props {
    name: string
}

export const Card = ({name}:Props) => {
    const {pokemon} = usePokemon({name})
    
  return (
      <CardContainer data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          {
              pokemon.isLoading
                  ?
                  <Spinner />
                  :
                  <>
                      <CardTitle>
                          {pokemon.data.name}
                      </CardTitle>
                      <InputDelete id={pokemon.data.id} name={pokemon.data.name} />
                      <CardImage src={pokemon.data.sprites.front_default} alt="" loading="lazy" />
                      <CardContainerContent >
                          <CardContent weight={pokemon.data.height} abilities={pokemon.data.abilities} />
                      </CardContainerContent>
                  </>
          }

      </CardContainer> 
  )
}
