// import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'

// const freelancersList = [
//   {
//     name: 'John Doe',
//     title: 'UX Designer',
//     picture: DefaultPicture,
//   },
//   {
//     name: 'Jane Doe',
//     title: 'Développeur frontend',
//     picture: DefaultPicture,
//   },
//   {
//     name: 'John Smith',
//     title: 'Devops',
//     picture: DefaultPicture,
//   },
//   {
//     name: 'Jane Smith',
//     title: 'UX Designer',
//     picture: DefaultPicture,
//   },
// ]

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [freelancersList, setFreelancersList] = useState([])

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true)
      try {
        const response = await fetch('http://localhost:8000/freelances')
        const { freelancersList } = await response.json()
        setFreelancersList(freelancersList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
              // description={profile.description}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
