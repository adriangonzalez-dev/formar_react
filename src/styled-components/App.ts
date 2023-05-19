import styled from 'styled-components';
import pikachu from '../assets/pikachu.webp'

export const AppContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    min-height: 100vh;
    padding: 16px;
    background-image: url(${pikachu});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
`;