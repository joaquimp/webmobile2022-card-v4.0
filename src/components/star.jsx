import styled from "styled-components";

const Circulo = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.button.background.default};
  width: 48px;
  height: 48px;
  border-radius: 48px;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export default function Star() {
  return (
    <Circulo>
      <Img src="/imagens/estrela.png" />
    </Circulo>
  );
}
