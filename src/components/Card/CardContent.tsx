import { CardContent as CardContainer } from '../../styled-components/Card'
import { Ability } from '../../interfaces/pokemon-interface'

interface Props {
    weight: number,
    abilities: Ability[]
}

export const CardContent = ({weight, abilities}:Props) => {
  return (
      <CardContainer>
          {weight}
          {
              abilities.map((ability: Ability) => <span key={ability.ability.name}>{ability.ability.name}</span>)
          }
      </CardContainer>
  )
}
