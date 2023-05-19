import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 20%;
  height: auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 850px) { 
    width: 30%;
   }
  @media (max-width: 545px) { 
   width: 40%;
  }
  @media (max-width: 420px) { 
    width: 100%;
   }
`;

export const CardContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
  text-transform: capitalize;
`;

export const CardContent = styled.div`
  font-size: 14px;
  color: #333;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const CardContentWeight = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const CardContentAbilitiesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`;

export const CardContentAbilities = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #333;
`;

export const Checkbox = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: fit-content;
  
`
export const CheckboxInput = styled.input`
   display: none;
    &:checked + label {
      background-color: var(--tipo-fuego);
      color: white;
      width: fit-content;
    }
`
export const CheckboxLabel = styled.label`
  display: flex;
  height: fit-content;
  border-radius: 5px;
  cursor: pointer;

`
