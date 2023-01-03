import styled from 'styled-components';

export const BtnDeleteAll = styled.button`
  background-color: #a5a7b4;
  border-style: none;
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #2d2f37;
  font-size: 1em;
`;

export const DeleteBtn = styled.button`
  border-style: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.inputBackground};
  padding: 5px;
  color: ${(props) => props.theme.fontColor};
  border-radius: 2px;
`;

export const BtnTheme = styled.div`
  position: absolute;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  font-size: 1.2em;
`;
