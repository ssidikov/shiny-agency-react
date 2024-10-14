import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ErrorIllustration from '../../assets/404.svg'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  margin: 30px;
  background-color: ${colors.background};
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`
const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: #2f2e41;
`
const Illustration = styled.img`
  max-weight: 800px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={ErrorIllustration} alt="Illustration d'erreur" />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
