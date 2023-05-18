import { Logo, NavbarContainer, SearchInput } from "../../styled-components/Header";

export const Header = () => {
  return (
    <NavbarContainer>
      <Logo>Pokémon Logo</Logo>
      <SearchInput type="text" placeholder="Buscar Pokémon" />
    </NavbarContainer>
  );
};