/* eslint-disable react-hooks/exhaustive-deps */
import { Ref, RefObject, useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector, useVisible } from "./hooks"
import { setPokemonsApi } from './store/slices/pokemons/thunks';
import { Header, Card, Title, Spinner, Modal } from "./components";
import { AppContainer, LoadingContainer } from "./styled-components/App";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppDispatch } from "./store";

export const App = () => {
  const dispatch:AppDispatch = useAppDispatch()
  const {data} = useAppSelector(state => state.pokemons)
  const [page, setPage] = useState<number>(0)
  const [showModal, setShowModal] = useState<boolean>(false)
  const visorRef = useRef<HTMLDivElement | null>(null)
  const isVisible:boolean = useVisible(visorRef)

  const showModalHandler = ():void => {
    setShowModal(!showModal)
  }

  const getMorePokemons = ():void => {
    setPage(page + 1)
  }
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
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
      <Header openModal={showModalHandler} />
      <Title />
      <AppContainer id='infiniteScroll'>
        {data.map((pokemon, index) => (
          <Card key={pokemon.name + index} name={pokemon.name} />
        ))}
        <LoadingContainer ref={visorRef}>
          <Spinner />
          <p>Cargando...</p>
        </LoadingContainer>
      </AppContainer>
      {
        showModal && <Modal show={showModalHandler} />
      }
    </>
  )
}

