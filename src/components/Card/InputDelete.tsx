import {ChangeEvent, useState} from 'react'
import { DeleteIcon } from '../svg/DeleteIcon'
import { Checkbox, CheckboxInput, CheckboxLabel } from '../../styled-components/Card'
import { addSelectedPokemons, removeSelectedPokemons } from '../../store/slices/pokemons/pokemons'
import { useAppDispatch } from '../../hooks'
interface Props {
    id: number,
    name: string
}

export const InputDelete = ({id, name}:Props) => {
    const [checked,setChecked] = useState(false)
    const dispatch = useAppDispatch()

    const addPokemon = (e:ChangeEvent<HTMLInputElement>) => {
        e.target.checked ? dispatch(addSelectedPokemons({name})) : dispatch(removeSelectedPokemons({name}))
        setChecked(e.target.checked)
    }
  return (
    <Checkbox>
        <CheckboxInput 
        type="checkbox" 
        id={String(id)} 
        onChange={addPokemon}/>
        <CheckboxLabel htmlFor={String(id)}>
            <DeleteIcon checked={!checked}/>
        </CheckboxLabel>
    </Checkbox>
  )
}
