import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerLoader = styled.div`
    position: relative;
    height: 50px;
    width: 50px;
    background: linear-gradient(to bottom, rgb(254, 0, 1) 50%, white 50% );
    border-radius: 50%;
    border: 5px solid black;
    animation: ${spin} 1s linear infinite;
    &::before {
        content: '';
        position: absolute;
        height: 4px;
        width: 100%;
        background: black;
        top: 50%;
        transform: translatey(-50%);
    }
    &::after {
        content: '';
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: inset 0 0 0 8px black, inset 0 0 0 10px white, inset 0 0 0 12px black;
    }
`