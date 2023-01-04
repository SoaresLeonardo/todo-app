import styled from 'styled-components';

export const TasksContainer = styled.div`
  margin-top: 15px;
  background-color: ${(props) => props.theme.todoBackground};
  padding: 30px;
  border-radius: 5px;
  ul {
    padding: 0%;
    /* background-color: ${(props) => props.theme.urlBackground}; */
    /* border-radius: 5px; */
    /* box-shadow: ${(props) => props.theme.urlBoxShadow}; */
  }

  li {
    list-style: none;
    border-bottom: 1px solid ${(props) => props.theme.body};
    padding: 20px;
    margin-bottom: 20px;

    color: ${(props) => props.theme.fontColor};
    justify-content: space-between;
    align-items: center;
    display: flex;
    overflow: auto;
  }
`;

export const Message = styled.p`
  font-size: 1em;
  margin-top: 20px;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  text-decoration: underline;
`;

export const TotalTasks = styled.div`
  margin-top: 50px;
  color: ${(props) => props.theme.fontColor};
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.inputBackground};
  padding: 15px;
  border-radius: 5px;
  display: flex;
`;
