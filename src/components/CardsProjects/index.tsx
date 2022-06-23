import React from 'react';
import { 
    Container,
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
import imageAbout from '../../../src/assets/images/portfolioImage.png'
const CardsProjects = () => {
    const GitHubRepo = () => {
        window.open('https://github.com/rhaneyko/rhaneyko-portifolio')
    }
    const LiveSite = () => {
        window.open('https://rhaneyko-honorio.netlify.app/')
    }

    return(
        <Container>
            {/* <CardProject className='card transation'>
              <Image src={imageAbout}/>
            <ProjectName className='projectTitle'>Portfolio</ProjectName>
            <ProjectDescription className='projectDescription'>
               Portfolio feito com React, TypeScript e para estilização usei Styled Components.
            </ProjectDescription>
             <Buttons className='buttonsHover transation' >
               <ButtonViewLive onClick={LiveSite}>
                  <ButtonViewLiveText>View Live</ButtonViewLiveText> 
               </ButtonViewLive>
               <ButtonGitRepo onClick={GitHubRepo} >
                  <ButtonGitRepoText  >GitHub Repo</ButtonGitRepoText>
               </ButtonGitRepo>
             </Buttons>
            </CardProject> */}
            
        </Container>
    )
}

export default CardsProjects;

