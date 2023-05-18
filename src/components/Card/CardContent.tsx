import { CardContent as CardContainer, CardContentAbilities, CardContentAbilitiesContainer, CardContentWeight } from '../../styled-components/Card'
import { Ability } from '../../interfaces/pokemon-interface';
import { ContentDivider } from '..'

interface Props {
    weight: number,
    abilities: Ability[],
}

export const CardContent = ({weight, abilities}:Props) => {
  return (
      <CardContainer>
        <ContentDivider title="Habilidades"/>
        <CardContentAbilitiesContainer>
          {
              abilities.map((ability: Ability) => <CardContentAbilities key={ability.ability.name}>{ability.ability.name}</CardContentAbilities>)
          }
        </CardContentAbilitiesContainer>
        <CardContentWeight>
            Peso: {weight}kg
        </CardContentWeight>
      </CardContainer>
  )
}
