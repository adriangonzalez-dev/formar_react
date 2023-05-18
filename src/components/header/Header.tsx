import { ImageLogo, Logo, NavbarContainer, SearchInput } from "../../styled-components/Header";

export const Header = () => {
  return (
    <NavbarContainer>
      <Logo>
        <ImageLogo src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="Pokémon logo" />
      </Logo>
      <SearchInput type="text" placeholder="Buscar por nombre o habilidad" />
    </NavbarContainer>
  );
};