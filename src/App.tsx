/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks"
import { setPokemonsApi } from './store/slices/pokemons/thunks';
import { Header } from "./components";
import { Card } from "./components/Card/Card";
import { AppContainer } from "./styled-components/App";

export const App = () => {
  const dispatch = useAppDispatch()
  const {data} = useAppSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(setPokemonsApi())
  }, [])
  return (
    <>
      <Header/>
       <AppContainer>
          {data.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name}/>
          ))}
       </AppContainer>
    </>
  )
}

