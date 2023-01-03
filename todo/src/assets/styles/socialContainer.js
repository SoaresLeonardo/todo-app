import styled from 'styled-components';

export const SocialContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  color: ${(props) => props.theme.fontColor};
`;

export const SocialNetWork = styled.div`
  font-size: 2em;

  a {
    color: #9f9faa;
    margin-right: 5px;
  }
`;
