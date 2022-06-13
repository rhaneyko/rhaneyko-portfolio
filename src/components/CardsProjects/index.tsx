import React from 'react';
//import Carousel from 'react-elastic-carousel'
import imageAbout from '../../assets/projectPortfolioImg.png'

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
        window.open('https://rhaneyko-portifolio.netlify.app/')
    }

    // const breakPoints = [
    //     { width: 1, itemsToShow: 2 },
    //     { width: 550, itemsToShow: 2 },
    //     { width: 768, itemsToShow: 3 },
    //     { width: 1200, itemsToShow: 4 },
    //   ];
    
    return(
        <Container>
          {/* <Carousel isRTL breakPoints={breakPoints}> */}
          
            <CardProject className='card transation'>
              <Image src={imageAbout} />
            <ProjectName className='projectTitle'>Portifólio</ProjectName>
          
            <ProjectDescription className='projectDescription'>
               Portifólio feito com React, TypeScript e para estilização usei Styled Components.
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
          {/* </Carousel> */}
        </Container>
    )
}

export default CardsProjects;
