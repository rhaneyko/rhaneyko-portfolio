import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import imageAbout from '../../assets/images/portfolioImage.png';
import { 
    Container,
    Title,
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

const ProjectsPage = () => {
    const response = [
      {  
        id: 1,
        title: 'Portifolio',
        url: '../assets/images/portfolioImage.png',
        description: 'Portfolio feito com React, TypeScript e para estilização usei Styled Components.',
        liveSite: 'https://rhaneyko-honorio.netlify.app/',
        gitHubRepo: 'https://github.com/rhaneyko/rhaneyko-portifolio'
      },
      {
        id: 2,
        title: 'Sistema de Validação',
        url: '../assets/images/signinsignupImage.jpg',
        description: 'Esse Sistema de criação e autenticação de usuário foi criado com React. Utilizei JavaScript, TypeScript e para estilização utilizei Styled Components.',
        liveSite: 'https://sistemasvalidacao.netlify.app/'
      },
      {
        id: 3,
        title: 'Sistema de Validação',
        url: '../assets/images/signinsignupImage.jpg',
        description: 'Repositório do projeto',
        liveSite: 'https://sistemascadastro.netlify.app/'
      }

    ]
      
     const [projects, setProjects] = useState(response)
useEffect(() => {
    setProjects(response)
})


  return (
    <Container id='projects'>
        <Title>Projetos</Title>
        <Carousel
          showArrows={true}
          itemsToShow={2}
          itemsToScroll={2}
          >
          {projects.map(project => (
                <CardProject key={project.id} className='card transation'>
                    <Image src={imageAbout}/>
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
        </Carousel>
    </Container>
  )
}
export default ProjectsPage;
