import React from 'react';
//import Carousel from 'react-elastic-carousel'

import PorfolioImage from '../../../src/assets/portfolioImage.png'

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

const CardsProjects = () => {
    const GitHubRepo = () => {
        window.open('https://github.com/rhaneyko/rhaneyko-portifolio')
    }
    const LiveSite = () => {
        window.open('https://rhaneyko-honorio.netlify.app/')
    }

    return(

        <Container>
            <CardProject className='card transation'>
              <Image src={PorfolioImage}/>
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
            </CardProject>
        </Container>
    )
}

export default CardsProjects;
