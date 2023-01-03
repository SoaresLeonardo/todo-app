import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 80px;
  button {
    background-color: #1d88e3;
    border-style: none;
    padding: 8px 10px;
    cursor: pointer;
    color: white;
    font-size: 1em;
    border-radius: 5px;
    margin-left: 10px;
  }

  input {
    padding: 8px;
    border-radius: 5px;
    font-size: 1em;
    background-color: ${(props) => props.theme.inputBackground};
    border-style: none;
    outline: none;
    color: ${(props) => props.theme.fontColor};
    width: 50%;
  }
`;
