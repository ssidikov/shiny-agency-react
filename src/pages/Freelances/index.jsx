import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'

const freelanceProfiles = [
  {
    name: 'John Doe',
    title: 'UX Designer',
    picture: DefaultPicture,
  },
  {
    name: 'Jane Doe',
    title: 'Développeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'John Smith',
    title: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'Jane Smith',
    title: 'UX Designer',
    picture: DefaultPicture,
  },
]

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: black;
  font-size: 2rem;
`

const PageSubtitle = styled.h2`
  text-align: center;
  padding-bottom: 30px;
  color: #8186a0;
  font-size: 1.5rem;
`

function Freelances() {
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.title}
            picture={profile.picture}
            title={profile.name}
            description={profile.description}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances
