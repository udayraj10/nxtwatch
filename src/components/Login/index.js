import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginContainer,
  Form,
  Label,
  Input,
  LoginButton,
  ShowLabel,
} from './styledComponent'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: 'false',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const logo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDark={isDark}>
              <Form isDark={isDark} onSubmit={this.submitForm}>
                <img src={logo} alt="website logo" className="logo" />
                <Label htmlFor="username" isDark={isDark}>
                  USERNAME
                </Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                  value={username}
                  isDark={isDark}
                />
                <Label htmlFor="password" isDark={isDark}>
                  PASSWORD
                </Label>
                <Input
                  type={showPassword ? 'password' : 'text'}
                  id="password"
                  placeholder="Password"
                  onChange={this.onChangePassword}
                  value={password}
                  isDark={isDark}
                />
                <div className="show-password">
                  <input
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onShowPassword}
                  />
                  <ShowLabel htmlFor="checkbox" isDark={isDark}>
                    Show Password
                  </ShowLabel>
                </div>
                <LoginButton type="submit" className="login-btn">
                  Login
                </LoginButton>
                {showErrorMsg && <p className="err-msg">*{errorMsg}</p>}
              </Form>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
