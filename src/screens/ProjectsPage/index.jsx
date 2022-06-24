import React, { useEffect, useState } from 'react';
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
})


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
                  <ButtonViewLive onClick={project.liveSite}>
                    <ButtonViewLiveText>Ver Live Site</ButtonViewLiveText>
                  </ButtonViewLive>
                  <ButtonGitRepo onClick={project.gitHubRepo}>
                    <ButtonGitRepoText>Ver GitHub</ButtonGitRepoText>
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
