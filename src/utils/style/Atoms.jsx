import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: #8186a0;
  font-size: 1.2rem;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `
    background-color: ${colors.primary};
    color: white;
    border-radius: 30px;
  `}
`
