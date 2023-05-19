/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "./hooks"
import { setPokemonsApi } from './store/slices/pokemons/thunks';
import { Header } from "./components";
import { Card } from "./components/Card/Card";
import { AppContainer, LoadingContainer } from "./styled-components/App";
import { Title } from "./components/Title/Title";
import { useVisible } from "./hooks/useVisible";
import { Spinner } from "./components/Spinner/Spinner";

export const App = () => {
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(0)
  const {data} = useAppSelector(state => state.pokemons)
  const visorRef = useRef(null)
  const isVisible = useVisible(visorRef)

  const getMorePokemons = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    dispatch(setPokemonsApi(page))
  }, [page])

  useEffect(() => {
    if(isVisible) {
      getMorePokemons()
    }
  }, [isVisible])
  return (
    <>
      <Header/>
        <Title/>
       <AppContainer id='infiniteScroll'>
          {data.map((pokemon,index) => (
            <Card key={pokemon.name + index} name={pokemon.name}/>
          ))}
        <LoadingContainer ref={visorRef}>
          <Spinner />
          <p>Cargando...</p>
        </LoadingContainer>
       </AppContainer>
    </>
  )
}

