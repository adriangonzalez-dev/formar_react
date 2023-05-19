/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks"
import { setPokemonsApi } from './store/slices/pokemons/thunks';
import { Header } from "./components";
import { Card } from "./components/Card/Card";
import { AppContainer } from "./styled-components/App";
import { Title } from "./components/Title/Title";

export const App = () => {
  const dispatch = useAppDispatch()
  const {data, selected} = useAppSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(setPokemonsApi())
  }, [])
  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <>
      <Header/>
        <Title/>
       <AppContainer>
          {data.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name}/>
          ))}
       </AppContainer>
    </>
  )
}

