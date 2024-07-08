import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaGamepad, FaFire} from 'react-icons/fa'
import {CgPlayListAdd} from 'react-icons/cg'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SidebarSection,
  LinkSection,
  LinkButton,
  LinkText,
  ContactSection,
  ContactHead,
  ImageSection,
  Image,
  ContactPara,
} from './styledComponent'

class Sidebar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <SidebarSection isDark={isDark}>
              <LinkSection>
                <Link to="/">
                  <LinkButton isDark={isDark}>
                    <IoMdHome size={20} color="#475569" />
                    <LinkText isDark={isDark}>Home</LinkText>
                  </LinkButton>
                </Link>
                <Link to="/trending">
                  <LinkButton isDark={isDark}>
                    <FaFire size={20} color="#475569" />
                    <LinkText isDark={isDark}>Trending</LinkText>
                  </LinkButton>
                </Link>
                <Link to="/gaming">
                  <LinkButton isDark={isDark}>
                    <FaGamepad size={20} color="#475569" />
                    <LinkText isDark={isDark}>Gaming</LinkText>
                  </LinkButton>
                </Link>
                <Link to="/saved-videos">
                  <LinkButton isDark={isDark}>
                    <CgPlayListAdd size={20} color="#475569" />
                    <LinkText isDark={isDark}>Saved videos</LinkText>
                  </LinkButton>
                </Link>
              </LinkSection>
              <ContactSection>
                <ContactHead isDark={isDark}>CONTACT US</ContactHead>
                <ImageSection>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ImageSection>
                <ContactPara isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactPara>
              </ContactSection>
            </SidebarSection>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Sidebar
