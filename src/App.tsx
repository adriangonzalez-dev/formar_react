/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks"
import { setPokemonsApi } from './store/slices/pokemons/thunks';
import { Result as PokemonResult} from './interfaces/pokemon-interface';
import {CardContainer, CardContent, CardTitle} from './styled-components/Card'
import { Header } from "./components";

export const App = () => {
  const dispatch = useAppDispatch()
  const {data} = useAppSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(setPokemonsApi())
  }, [])
  return (
    <>
      <Header/>
        <CardContainer >
          <CardTitle>
            hola mundo
          </CardTitle>
          <CardContent>
            hola mundo
          </CardContent>
        </CardContainer>  
    </>
  )
}

