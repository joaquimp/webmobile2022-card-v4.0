import { useState } from "react";
import { Body, Card } from "../components/cad.style";
import {
  ConfirmButton,
  ConfirmButtonDisabled,
  NumberButton,
  NumberButtonContainer
} from "../components/inputs.style";
import Star from "../components/star";
import { H1, P } from "../components/typography";

export default function Avaliacao(props) {
  const [selecionado, setSelecionado] = useState();

  return (
    <Body>
      <Card>
        <Star />
        <H1>Avalie o nosso serviço.</H1>
        <P>
          Por favor conte um pouco como foi sua experiência ao usar nosso
          serviço. Todo retorno é importante para nós melhorarmos!
        </P>
        <NumberButtonContainer>
          <NumberButton
            ativo={selecionado === 1}
            onClick={() => setSelecionado(1)}
          >
            1
          </NumberButton>
          <NumberButton
            ativo={selecionado === 2}
            onClick={() => setSelecionado(2)}
          >
            2
          </NumberButton>
          <NumberButton
            ativo={selecionado === 3}
            onClick={() => setSelecionado(3)}
          >
            3
          </NumberButton>
          <NumberButton
            ativo={selecionado === 4}
            onClick={() => setSelecionado(4)}
          >
            4
          </NumberButton>
          <NumberButton
            ativo={selecionado === 5}
            onClick={() => setSelecionado(5)}
          >
            5
          </NumberButton>
        </NumberButtonContainer>
        {selecionado && (
          <ConfirmButton to={`/agradecimento?nota=${selecionado}`}>
            AVALIAR
          </ConfirmButton>
        )}
        {!selecionado && <ConfirmButtonDisabled>AVALIAR</ConfirmButtonDisabled>}
      </Card>
    </Body>
  );
}
