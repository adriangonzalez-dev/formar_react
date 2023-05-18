import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #12c2e9;  
  background: -webkit-linear-gradient(to right, var(--tipo-fuego), var(--tipo-dragon), var(--tipo-agua));  
  background: linear-gradient(to right, var(--tipo-fuego), var(--tipo-dragon), var(--tipo-agua));
  width: 100%;
  padding: 5px 16px;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.img`
  width: 80px;
  height: 80px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  &:hover {
    outline: 2px solid var(--tipo-acero);
  }
`;