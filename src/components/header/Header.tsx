import { ImageLogo, Logo, NavbarContainer } from "../../styled-components/Header";
import { Button } from "../../styled-components/Title";

interface Props {
  openModal: () => void;
}

export const Header = ({openModal}:Props) => {
  return (
    <NavbarContainer>
      <Logo>
        <ImageLogo src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="Pokémon logo" />
      </Logo>
      <Button
      onClick={openModal}>Buscar</Button>
    </NavbarContainer>
  );
};