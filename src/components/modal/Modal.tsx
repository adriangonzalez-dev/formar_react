//create ract with typescript component with name Modal
// import { Props } from './Modal.types'
import { useEffect, useState } from 'react';
import { ContentDivider } from '../index'
import { 
    Container, 
    ModalCloseButton, 
    ModalContainer, 
    ModalContent, 
    ModalTitle } from '../../styled-components/Modal'
import { CloseIcon } from '../svg'
import { Card } from './Card';
import { SearchBar } from './SearchBar';
import { getAllAbilities, getAllPokemons } from '../../api/pokemons';
import { Result } from '../../interfaces/pokemon-interface';
import { AbilitiyResponse, ListAbilitiesResponse } from '../../interfaces/abilities-interface';

interface Props {
    show: () => void;
}

export const Modal = ({show}:Props) => {
    const [pokemons, setPokemons] = useState<Result[]>();
    const [abilities, setAbilities] = useState<ListAbilitiesResponse>();
    const [loading, setLoading] = useState<boolean>(false);
    const [resultSearch, setResultSearch] = useState<Result[] | AbilitiyResponse[] | undefined>([]);

    const getResults = async ():Promise<void> => {
        setLoading(true)
        try {
            const dataPokemons:Result[] = await getAllPokemons()
            setPokemons(dataPokemons)
            const dataAbilities:ListAbilitiesResponse = await getAllAbilities()
            setAbilities(dataAbilities)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const setResults = (data:Result[] | AbilitiyResponse[] | undefined)=> {
        setResultSearch(data)
    }

    useEffect(() => {
        getResults()
    }, [])

    return (
        <Container>
            <ModalContainer>
                <ModalTitle>Buscador</ModalTitle>
                <SearchBar 
                pokemons={pokemons} 
                abilities={abilities} 
                setResult={setResults} loading={loading}/>
                <ContentDivider title=''/>
                <ModalCloseButton onClick={show}>
                    <CloseIcon/>
                </ModalCloseButton>
                <ModalContent>

                     {
                        resultSearch === undefined ?
                        <p>No hay resultados</p>
                        :
                        resultSearch?.map((result, index) =>
                        <Card
                        key={index}
                        name={result.name}
                        />)
                     }
                     {
                        resultSearch?.length === 0 && <p>No hay resultados</p>
                     }
                    
                </ModalContent>
            </ModalContainer>
        </Container>
    )
    }
