import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    width: 50%;
    height: 50%;
    background-color: #fff;
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        width: 80%;
        height: 80%;
    }

    @media (max-width: 420px) {
        width: 100%;
        height: 100%;
    }

`;

export const ModalCloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: #333;
`;

export const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    overflow-y: scroll;
`;

export const ModalTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
    text-transform: capitalize;

    @media (max-width: 420px) {
        font-size: 16px;
    }

    @media (max-width: 320px) {
        font-size: 14px;
    }
`;

export const ModalCard = styled.div`
    width: 100%;
    height: 150px;
    margin-bottom: 5px;
    display: flex;
    gap:2px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  &:hover {
    outline: 2px solid var(--tipo-acero);
  }
`;

export const selectInput = styled.select`
    padding: 8px;
    border: none;
    border-radius: 4px;
    &:hover {
        outline: 2px solid var(--tipo-acero);
    }
    `;

export const optionSelect = styled.option`
    padding: 8px;
    border: none;
    border-radius: 4px;
    &:hover {
        outline: 2px solid var(--tipo-acero);
    }
    `;

export const SearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;

    @media (max-width: 420px) {
        flex-direction: column;
        gap: 8px;
    }
`;

export const CardTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
    text-transform: capitalize;
`;

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
    width: 50%;
    font-size: 12px;
`;

export const CardTypes = styled.span`
    width: fit-content;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: var(--tipo-acero);
    color: #fff;
    font-size: 12px;
    text-transform: capitalize;
    border: 1px solid;
`;