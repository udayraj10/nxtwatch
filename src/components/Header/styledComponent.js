import styled from 'styled-components'

export const HeaderSection = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#fff')};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  position: fixed;

  @media screen and (max-width: 768px) {
    padding: 8px 20px;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  font-family: 'roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#fff' : '#3b82f6')};
  border: ${props => (props.isDark ? '1px solid #fff' : '1px solid #3b82f6')};
  border-radius: 2px;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
`

export const LogoutButtonIcon = styled.button`
  background-color: transparent;
  color: ${props => (props.isDark ? '#fff' : '#0f0f0f')};
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
`

export const TriggerButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const Menu = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 50%;
`

export const LinkButton = styled.div`
  background-color: transparent;
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const LinkText = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
  margin-left: 30px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`

export const LogoutPopup = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f4f4f4')};
  border-radius: 15px;
  text-align: center;
  padding: 40px;
`

export const LogoutPopupPara = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? '#fff' : '#00306e')};
  margin-top: 0;
`

export const CancelButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: 100px;
  font-family: 'roboto';
  font-size: 16px;
  color: #94a3b8;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  margin-right: 20px;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  height: 40px;
  width: 100px;
  font-family: 'roboto';
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
`
