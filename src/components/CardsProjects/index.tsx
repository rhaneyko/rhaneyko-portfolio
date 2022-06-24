import React, { useEffect, useState } from 'react';
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
    // const GitHubRepo = () => {
    //     window.open('https://github.com/rhaneyko/rhaneyko-portifolio')
    // }
    // const LiveSite = () => {
    //     window.open('https://rhaneyko-honorio.netlify.app/')
    // }

    // const response = [
    //     {  
    //         id: 1,
    //         title: 'Portifolio',
    //         url: '../assets/images/portfolioImage.png',
    //         description: 'Portfolio feito com React, TypeScript e para estilização usei Styled Components.',
    //         liveSite: 'https://rhaneyko-honorio.netlify.app/',
    //     },
    //     {
    //         id: 2,
    //         title: 'Sistema de Validação',
    //         url: '../assets/images/signinsignupImage.jpg',
    //         description: 'Repositório do projeto',
    //         liveSite: 'https://sistemasvalidacao.netlify.app/'
    //     },
    //     {
    //         id: 3,
    //         title: 'Sistema de Cadastro',
    //         url: '../assets/images/signinsignupImage.jpg',
    //         description: 'Repositório do projeto',
    //         liveSite: 'https://sistemascadastro.netlify.app/'
    //     }
    // ]
          
    // const [projects, setProjects] = useState(response)
    // useEffect(() => {
    //     setProjects(response)
    // }, [])
    return (
        <Container>
            {/* {projects.map(project => (
                <CardProject key={project.id}>
                    <Image src={project.url} alt="portifolio"/>
                    <ProjectName>{project.title}</ProjectName>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <Buttons>
                        <ButtonViewLive onClick={LiveSite}>
                            <ButtonViewLiveText>Ver Live Site</ButtonViewLiveText>
                        </ButtonViewLive>
                        <ButtonGitRepo onClick={GitHubRepo}>
                            <ButtonGitRepoText>Ver GitHub</ButtonGitRepoText>
                        </ButtonGitRepo>
                    </Buttons>
                </CardProject>
            ))} */}
        </Container>
    );




    


//     return(
//         <Container>
//             {/* <CardProject className='card transation'>
//               <Image src={imageAbout}/>
//             <ProjectName className='projectTitle'>Portfolio</ProjectName>
//             <ProjectDescription className='projectDescription'>
//                Portfolio feito com React, TypeScript e para estilização usei Styled Components.
//             </ProjectDescription>
//              <Buttons className='buttonsHover transation' >
//                <ButtonViewLive onClick={LiveSite}>
//                   <ButtonViewLiveText>View Live</ButtonViewLiveText> 
//                </ButtonViewLive>
//                <ButtonGitRepo onClick={GitHubRepo} >
//                   <ButtonGitRepoText  >GitHub Repo</ButtonGitRepoText>
//                </ButtonGitRepo>
//              </Buttons>
//             </CardProject> */}
            


            
//         </Container>
//     )
}

export default CardsProjects;

