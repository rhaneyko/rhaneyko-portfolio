import React from 'react'
//import Carousel from 'react-elastic-carousel';
import CardsProjects from '../../components/CardsProjects';
import { 
    Container,
    Title,
     } from './styles'

const ProjectsPage = () => {
  return (
    <Container id='projects'>
        <Title>Projetos</Title>
        {/* <Carousel
          breakPoints={
            [
              { width: 1, itemsToShow: 1, itemsToScroll: 1 },
              { width: 550, itemsToShow: 1, itemsToScroll: 1 },
              { width: 768, itemsToShow: 1, itemsToScroll: 1 },
              { width: 1200, itemsToShow: 2, itemsToScroll: 2 },
              { width: 1600, itemsToShow: 2, itemsToScroll: 2 },
            ]
          }
          showArrows={true}
          enableAutoPlay={true}

          autoPlaySpeed={3000}
          itemsToShow={2}
          itemsToScroll={2}
          >
          <CardsProjects/>
          <CardsProjects/>
          <CardsProjects/>
          <CardsProjects/>
        </Carousel> */}
         
        <CardsProjects/>
    </Container>
  )
}
export default ProjectsPage;
