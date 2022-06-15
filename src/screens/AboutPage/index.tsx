import React from 'react'

import { 
    Container,
    Title,
    About,
    TextAbout,
     } from './styles'


const AboutPage: React.FC = () => {
  return (
    <Container id='about' >
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

