import styled from 'styled-components';

export const TasksContainer = styled.div`
  margin-top: 100px;

  ul {
    padding: 0%;
    /* background-color: ${(props) => props.theme.urlBackground}; */
    /* border-radius: 5px; */
    /* box-shadow: ${(props) => props.theme.urlBoxShadow}; */
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
    overflow: auto;
  }
`;

export const Message = styled.p`
  font-size: 1em;
  margin-top: 50px;
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
