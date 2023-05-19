import { 
    SearchInput, 
    selectInput as Select, 
    optionSelect as Option, 
    SearchForm} from '../../styled-components/Modal';
import { Button } from '../../styled-components/Title';
import { Result } from '../../interfaces/pokemon-interface';
import { AbilitiyResponse, ListAbilitiesResponse, Result as ResultAbilities } from '../../interfaces/abilities-interface';
import { ChangeEvent, FormEvent ,useState } from 'react';
import { GetOneAbility } from '../../api/pokemons';

interface Props {
    pokemons: Result[] | undefined;
    abilities: ListAbilitiesResponse | undefined;
    setResult: (data:Result[] | ResultAbilities[] | undefined)=> void;
    loading: boolean;
}

interface InitialState {
    name: string;
    ability: string;
}

const initialState:InitialState = {
    name: '',
    ability: ''
}

export const SearchBar = ({pokemons, abilities, setResult, loading}:Props) => {
    const [values, setValues] = useState<InitialState>(initialState)
    const [isLoading,setIsLoading ] = useState<boolean>(false)

    const handleChanges = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>):void => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault()
        if(values.name === '' && values.ability === '') return setResult(undefined)
        if(values.name !== ''){
            const newPokemons:Result[] | undefined= pokemons?.filter(pokemon => pokemon.name.includes(values.name))
            setResult(newPokemons)
            setValues(initialState)
            return;
        }
        if(values.ability !== ''){
            const newAbilities:ResultAbilities | undefined = abilities?.results.filter(ability => ability.name.includes(values.ability))[0];
            if(newAbilities === undefined) return setResult(undefined)
            try {
                setIsLoading(true)
                const result:AbilitiyResponse = await GetOneAbility(newAbilities.name)
                const filterPokemons:Result[] = result.pokemon.map((pokemon: { pokemon: ResultAbilities; }) => pokemon.pokemon);
                setResult(filterPokemons)
                setValues(initialState)
                return;
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
    }

  return (
      <SearchForm onSubmit={handleSubmit}>
          <SearchInput
              type="text"
              name='name'
              placeholder="Buscar por nombre"
              onChange={handleChanges} />
          <Select name="ability" onChange={handleChanges}>
              <Option defaultValue="#" hidden selected>Habilidades</Option>
              {
                  loading
                      ?
                      <Option defaultValue="#">Cargando...</Option>
                      :
                      abilities?.results.map((ability, index) =>
                      (<Option
                          key={index}
                          defaultValue={ability.name}>
                          {ability.name}
                      </Option>))
              }

          </Select>
          <Button
              type='submit'
              disabled={isLoading || values.name === '' && values.ability === ''}>
              Buscar</Button>
      </SearchForm>
  )
}
