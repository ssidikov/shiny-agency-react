import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 20px;
`

const CartTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
  align-self: center;
`

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 30px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  ${'' /* width: 350px; */}
  width: 339px;
  height: 334px;
  transition: 200ms;
  align-items: center;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  Card.defaultProps = {
    label: '',
    title: '',
    picture: 'DefaultPicture',
  }
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CartTitle>{title}</CartTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card
