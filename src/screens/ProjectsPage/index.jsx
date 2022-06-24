import React, { useEffect, useState, Linking } from 'react';
//import Carousel from 'react-elastic-carousel';

import { 
    Container,
    Title,
    Cards,
    CardProject,
    ProjectName,
    Image,
    ProjectDescription,
    Buttons,
    ButtonViewLive,
    ButtonViewLiveText,
    ButtonGitRepo,
    ButtonGitRepoText,
   
     } from './styles'
import dataProjects from '../../assets/Data/projectsDatas.json'


const ProjectsPage = () => {
    const [projects, setProjects] = useState(dataProjects)
    

    useEffect(() => {
        setProjects(dataProjects)
    }
    , [])

    const links = [
        {
            id: 1,
            name: 'View Live',
            url: 'https://sistemasvalidacao.netlify.app/'
        },
        {
            id: 2,
            name: 'Git Repo',
            url: 'https://github.com/rhaneyko/signin-signup-auth'
        }
    ]






    return (
    <Container id='projects'>
        <Title>Projetos</Title>
        {/* //<Carousel
          showArrows={true}
          itemsToShow={2}
          itemsToScroll={2}
          > */}
          <Cards>
          {projects.map(project => (
            <CardProject key={project.id} className='card transation'>
              <Image src={project.url}/>
              <ProjectName className='projectTitle'>{project.title}</ProjectName>
               <ProjectDescription className='projectDescription'>
                  {project.description}
               </ProjectDescription>
               <Buttons className='buttonsHover transation'>
                  <ButtonViewLive onClick={
                    () => window.open(project.liveSite)
                  }
                   >
                    <ButtonViewLiveText>Live site</ButtonViewLiveText>
                  </ButtonViewLive>
                  <ButtonGitRepo onClick={
                    () => window.open(project.github)
                  }>
                    <ButtonGitRepoText>GitHub</ButtonGitRepoText>
                  </ButtonGitRepo>
                </Buttons>
            </CardProject>
          ))}
          </Cards>
        {/* </Carousel> */}
    </Container>
  )
}
export default ProjectsPage;
