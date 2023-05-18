import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #333;
  color: #fff;
  width: 100%;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
`;