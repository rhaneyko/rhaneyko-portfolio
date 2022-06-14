import React from 'react'
import imageAbout from '../../assets/imageAbout.png'

import { 
    Container,
    Title,
    Image,
    About,
    TextAbout,
     } from './styles'


const AboutPage: React.FC = () => {
  return (
    <Container id='about' >
      <Image src={imageAbout} />
      <About>
        <Title>&lt;Quem eu sou?/&gt;</Title>
         <TextAbout>
            Sou Rhaneyko Honorio, tenho 19 anos, sou desenvolvedor Mobile | Front-End. Atualmente sou estagiário na Unimed. Venho aprimorando meus conhecimentos em JavaScript, React JS, React Native e TypeScript. Estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Estácio, atualmente no primeiro semestre.
         </TextAbout>
      </About>
    </Container>
  )
}

export default AboutPage;

