import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 15px;
  box-shadow: ${props =>
    props.isDark ? '0px 0px 16px #0f0f0f' : '0px 0px 20px #ebebeb'};
`

export const Label = styled.label`
  font-family: 'roboto';
  font-size: 12px;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
  font-weight: bold;
  margin-bottom: 5px;
`

export const Input = styled.input`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  height: 40px;
  width: 100%;
  font-family: 'roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
  border: 1px solid #64748b;
  border-radius: 2px;
  padding: 0px 10px;
  margin-bottom: 20px;
  outline: none;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  height: 40px;
  width: 100%;
  font-family: 'roboto';
  font-size: 15px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`

export const ShowLabel = styled.label`
  font-family: 'roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
`
