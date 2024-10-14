import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DarkLogo from '../../assets/dark-logo.png'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

const StyledLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  color: #8186a0;
  font-size: 1.2rem;
  font-weight: 700;
  ${(props) =>
    props.$isFullLink &&
    `
    background-color: ${colors.primary};
    color: white;
    border-radius: 30px;
  `}
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={DarkLogo} alt="Logo de Shiny" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
