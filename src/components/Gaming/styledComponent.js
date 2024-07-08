import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin-left: 20%;

  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`

export const GameSection = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`

export const HeaderSection = styled.ul`
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
  height: 130px;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  list-style-type: none;

  @media screen and (max-width: 767px) {
    height: 100px;
  }
`

export const GameLogo = styled.li`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#e2e8f0')};
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;

  @media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
  }
`

export const GameHeadList = styled.li`
  list-style-type: none;
`

export const GameHead = styled.h1`
  font-family: 'roboto';
  font-size: 35px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`

export const GamesList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;

  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`

export const LoaderContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FailureSection = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImage = styled.img`
  width: 400px;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const FailureHead = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`

export const FailurePara = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
  margin: 5px;

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  height: 40px;
  width: 80px;
  font-family: 'roboto';
  color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`
