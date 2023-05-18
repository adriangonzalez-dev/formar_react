import { Divider, DividerContainer, DividerTitle } from "../../styled-components/Components";

interface Props {
    title: string;
}

export const ContentDivider = ({ title }:Props) => {
  return (
    <DividerContainer>
      <DividerTitle>{title}</DividerTitle>
      <Divider />
    </DividerContainer>
  );
};