import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text.primary};
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.gradient};
  width: 325px;
  height: 350px;
  padding: 40px;
  border-radius: 16px;
  margin: 0px;
  @media (max-width: 800px) {
    width: 100vw;
    max-width: 325px;
    height: 100vh;
    justify-content: space-around;
  }
`;
