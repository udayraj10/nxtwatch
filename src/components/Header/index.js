import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {IoMdHome, IoMdClose} from 'react-icons/io'
import {FaGamepad, FaFire, FaMoon} from 'react-icons/fa'
import {CgPlayListAdd} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  HeaderSection,
  LogoutButton,
  LogoutButtonIcon,
  TriggerButton,
  LogoutPopup,
  LogoutPopupPara,
  CancelButton,
  ConfirmButton,
  Menu,
  LinkSection,
  LinkButton,
  LinkText,
  CloseButton,
} from './styledComponent'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const logoImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const onChangeTheme = () => {
          changeTheme()
        }

        const renderMenu = () => (
          <Popup
            modal
            trigger={
              <TriggerButton type="button">
                <GiHamburgerMenu
                  size={25}
                  color={isDark ? '#fff' : '#0f0f0f'}
                />
              </TriggerButton>
            }
          >
            {close => (
              <Menu isDark={isDark}>
                <CloseButton type="button" onClick={() => close()}>
                  <IoMdClose size={30} color={isDark ? '#fff' : '#000'} />
                </CloseButton>
                <LinkSection>
                  <Link to="/">
                    <LinkButton isDark={isDark}>
                      <IoMdHome size={25} color="#475569" />
                      <LinkText isDark={isDark}>Home</LinkText>
                    </LinkButton>
                  </Link>
                  <Link to="/trending">
                    <LinkButton isDark={isDark}>
                      <FaFire size={25} color="#475569" />
                      <LinkText isDark={isDark}>Trending</LinkText>
                    </LinkButton>
                  </Link>
                  <Link to="/gaming">
                    <LinkButton isDark={isDark}>
                      <FaGamepad size={25} color="#475569" />
                      <LinkText isDark={isDark}>Gaming</LinkText>
                    </LinkButton>
                  </Link>
                  <Link to="/saved-videos">
                    <LinkButton isDark={isDark}>
                      <CgPlayListAdd size={25} color="#475569" />
                      <LinkText isDark={isDark}>Saved videos</LinkText>
                    </LinkButton>
                  </Link>
                </LinkSection>
              </Menu>
            )}
          </Popup>
        )

        return (
          <HeaderSection isDark={isDark}>
            <Link to="/">
              <img src={logoImage} alt="website logo" className="nav-logo" />
            </Link>

            <div className="nav-content">
              <button
                type="button"
                data-testid="theme"
                className="theme"
                onClick={onChangeTheme}
              >
                {isDark ? (
                  <FiSun size={25} color={isDark ? '#fff' : '#0f0f0f'} />
                ) : (
                  <FaMoon size={25} color={isDark ? '#fff' : '#0f0f0f'} />
                )}
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" isDark={isDark}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <LogoutPopup isDark={isDark}>
                    <LogoutPopupPara isDark={isDark}>
                      Are you sure, you want to logout
                    </LogoutPopupPara>
                    <CancelButton type="button" onClick={() => close()}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onLogout}>
                      Confirm
                    </ConfirmButton>
                  </LogoutPopup>
                )}
              </Popup>
            </div>

            <div className="nav-content-mobile">
              <button
                type="button"
                data-testid="theme"
                className="theme"
                onClick={onChangeTheme}
              >
                {isDark ? (
                  <FiSun size={20} color={isDark ? '#fff' : '#0f0f0f'} />
                ) : (
                  <FaMoon size={20} color={isDark ? '#fff' : '#0f0f0f'} />
                )}
              </button>
              {renderMenu()}
              <Popup
                modal
                trigger={
                  <LogoutButtonIcon
                    type="button"
                    onClick={onLogout}
                    isDark={isDark}
                  >
                    <FiLogOut size={25} color={isDark ? '#fff' : '#0f0f0f'} />
                  </LogoutButtonIcon>
                }
              >
                {close => (
                  <LogoutPopup isDark={isDark}>
                    <LogoutPopupPara isDark={isDark}>
                      Are you sure you want to logout?
                    </LogoutPopupPara>
                    <CancelButton type="button" onClick={() => close()}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onLogout}>
                      Confirm
                    </ConfirmButton>
                  </LogoutPopup>
                )}
              </Popup>
            </div>
          </HeaderSection>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
