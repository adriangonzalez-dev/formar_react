import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    flew-wrap: wrap;
    width: 100%;
    padding: 5px;
    justify-content: center;
    align-items: center;    
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
`;

export const TitleText = styled.h1`
    font-size: 24px;
    color: #333;
    text-align: start;
    width: 100%;
    @media (max-width: 420px) {
        font-size: 18px;
    }
`;

export const Button = styled.button`
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    &:hover {
        background-color: #000; 
    }
    &:disabled {
        background-color: #ccc;
        color: #333;
        cursor: not-allowed;
    }
`;