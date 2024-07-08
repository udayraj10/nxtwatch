import styled from 'styled-components'

export const SaveContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin-left: 20%;

  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`

export const SavedSection = styled.div`
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

  @media screen and (max-width: 767px) {
    height: 100px;
  }
`

export const SavedLogo = styled.li`
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

export const SavedHeadList = styled.li`
  list-style-type: none;
`

export const SavedHead = styled.h1`
  font-family: 'roboto';
  font-size: 35px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`

export const SavedList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 40px;

  @media screen and (max-width: 767px) {
    padding: 20px;
  }

  @media screen and (max-width: 576px) {
    padding: 0px;
  }
`

export const NoSavedSection = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NoSavedImage = styled.img`
  width: 400px;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const NoSavedHead = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`

export const NoSavedPara = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
  margin: 5px;

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
