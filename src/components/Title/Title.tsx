import { useAppDispatch, useAppSelector } from "../../hooks"
import { deleteSelectedPokemons } from "../../store/slices/pokemons/pokemons"
import { Button, TitleContainer, TitleText } from "../../styled-components/Title"

export const Title = () => {
    const dispatch = useAppDispatch()
    const {selected} = useAppSelector(state => state.pokemons)
    const disabled = selected.length === 0
  return (
    <TitleContainer>
        <TitleText>Todos los Pokemons!</TitleText>
        <Button 
        type='button' 
        onClick={()=>dispatch(deleteSelectedPokemons())}
        disabled={disabled}>
            Eliminar seleccionados
        </Button>
    </TitleContainer>
  )
}
