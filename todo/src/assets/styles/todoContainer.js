import styled from 'styled-components';

export const TodoContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 60px auto;
  max-width: 650px;
  background-color: ${(props) => props.theme.todoBackground};
  padding: 22px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  color: #a5a7b4;
`;
