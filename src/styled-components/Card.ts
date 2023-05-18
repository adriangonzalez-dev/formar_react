import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 20%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

export const CardContent = styled.p`
  font-size: 14px;
  color: #333;
`;