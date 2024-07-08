import styled from 'styled-components'

export const SidebarSection = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#fff')};
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 30px;
  position: fixed;
  left: 0;
  top: 80px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const LinkButton = styled.div`
  background-color: transparent;
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
`

export const LinkText = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
  margin-left: 20px;
`

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContactHead = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
`

export const ImageSection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`

export const Image = styled.img`
  width: 40px;
  margin-right: 10px;
`

export const ContactPara = styled.p`
  font-family: 'roboto';
  font-size: 18px;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
`
