import React from 'react'
import CardsProjects from '../../components/CardsProjects';
import { 
    Container,
    Title,
     } from './styles'

const ProjectsPage: React.FC = () => {

  return (
    <Container id='projects'>
        <Title>Projetos</Title>
        <CardsProjects/>
    </Container>
  )
}
export default ProjectsPage;
