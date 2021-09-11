import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 32px;
`;

interface Props {
  children: ReactNode;
}
export function Text({ children }: Props) {
  return <Container>{children}</Container>;
}
