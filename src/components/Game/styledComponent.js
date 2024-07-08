import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
  width: 24%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-right: auto;

  @media screen and (max-width: 576px) {
    width: 48%;
  }
`

export const GameImage = styled.img`
  width: 100%;
`

export const GameTitle = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`

export const GameView = styled.p`
  font-family: 'roboto';
  font-size: 18px;
  color: #64748b;
  margin-top: 0;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
