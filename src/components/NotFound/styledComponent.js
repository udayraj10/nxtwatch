import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  height: 100vh;
  margin-left: 20%;

  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`

export const NotFoundSection = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotFoundImage = styled.img`
  width: 400px;

  @media screen and (max-width: 576px) {
    width: 300px;
  }
`

export const NotFoundHead = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`

export const NotFoundPara = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
  margin: 5px;

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
