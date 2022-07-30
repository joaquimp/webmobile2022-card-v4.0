import { Link } from "react-router-dom";
import styled from "styled-components";

export const ConfirmButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 50px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.action};
  border: none;
  color: ${(props) => props.theme.button.color.active};
  cursor: pointer;
  &:active {
    background-color: ${(props) => props.theme.button.background.default};
  }
`;

export const ConfirmButtonDisabled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 50px;
  border-radius: 40px;
  background: ${(props) => props.theme.buttonDisabled.background};
  border: none;
  color: ${(props) => props.theme.buttonDisabled.color};
`;

export const NumberButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NumberButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  border: none;
  background: ${(props) =>
    props.ativo
      ? props.theme.button.background.active
      : props.theme.button.background.default};
  color: ${(props) =>
    props.ativo
      ? props.theme.button.color.active
      : props.theme.button.color.default};
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.ativo
        ? props.theme.button.background.active
        : props.theme.button.background.focus};
    color: ${(props) =>
      props.ativo
        ? props.theme.button.color.active
        : props.theme.button.color.focus};
  }
`;
