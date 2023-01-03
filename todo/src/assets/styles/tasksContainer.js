import styled from 'styled-components';

export const TasksContainer = styled.div`
  margin-top: 50px;

  ul {
    background-color: ${(props) => props.theme.urlBackground};
    border-radius: 5px;
    padding: 20px;
    box-shadow: ${(props) => props.theme.urlBoxShadow};
  }

  li {
    list-style: none;
    background-color: ${(props) => props.theme.liBackground};
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.liBoxShadow};
    color: ${(props) => props.theme.fontColor};
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
`;

export const Message = styled.p`
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  text-decoration: underline;
`;


export const TotalTasks = styled.div`
  margin-top: 25px;
  color: ${(props) => props.theme.fontColor};
  justify-content: space-between;
  align-items: center;
  display: flex;
`;