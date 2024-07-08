import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin-left: 20%;

  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`

export const HomeSection = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  width: 100%;
  margin-top: 80px;
`

export const BannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 35vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media screen and (max-width: 576px) {
    height: 25vh;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`

export const NxtLogo = styled.img`
  width: 100px;
`

export const BannerHead = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  color: #1e293b;

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`

export const BannerButton = styled.button`
  background-color: #fff;
  height: 40px;
  width: 100px;
  font-family: 'roboto';
  color: #1e293b;
  border: 1px solid #1e293b;
  cursor: pointer;
  outline: none;
`

export const SearchVideoSection = styled.div`
  padding: 30px;

  @media screen and (max-width: 576px) {
    padding: 0px;
  }
`

export const SearchContainer = styled.div`
  background-color: transparent;
  height: 35px;
  width: 50%;
  display: flex;
  border: 1px solid ${props => (props.isDark ? '#424242' : '#cccccc')};

  @media screen and (max-width: 576px) {
    width: 92%;
    margin: 15px;
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  height: 35px;
  width: 100%;
  font-family: 'roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  border: none;
  padding: 0px 10px;
  outline: none;
`

export const SearchIconButton = styled.button`
  background-color: ${props => (props.isDark ? '#424242' : '#ebebeb')};
  width: 100px;
  border: none;
  border: 1px solid ${props => (props.isDark ? '#424242' : '#cccccc')};
  cursor: pointer;
  outline: none;
`

export const HomeVideos = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px;
  margin-top: 40px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-top: 0px;
  }
`

export const LoaderContainer = styled.div`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FailureSection = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
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

export const NoSearchContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`

export const NoSearchImage = styled.img`
  width: 400px;

  @media screen and (max-width: 576px) {
    width: 300px;
  }
`

export const NoSearchHead = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
  color: ${props => (props.isDark ? '#fff' : '#0f0f0f')};
  margin: 5px;

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`

export const NoSearchPara = styled.p`
  font-family: 'roboto';
  font-size: 25px;
  color: #475569;

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
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`
