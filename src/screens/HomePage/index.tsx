import React from 'react'
import { 
    Container,
    Main,
    Name,
    Gretting,
    ButtonLnkd,
    ButtonCv,
    ButtonTextLnkd,
    ButtonTextCv,
     } from './styles'

const HomePage: React.FC  = () => {
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/rhaneyko-honorio-73657819b')
  }

  const openCv = () => {
      window.open('https://firebasestorage.googleapis.com/v0/b/todolist-b2715.appspot.com/o/CHEAT%20DO%20GIT.pdf?alt=media&token=3230db7f-a15d-4861-b11b-6952e6f6a280')
  }
  

  return (
    <Container className='Home' id='home'>
        <Main>
            <Gretting>Olá, meu nome é</Gretting>
                <Name>Rhaneyko </Name> 
            <Gretting>Desenvolvedor Front-End | Mobile.</Gretting>
            <Gretting>Estudante de Análise e Desenvolvimento de Sistemas.|</Gretting>
              <ButtonLnkd onClick={(openLinkedin)}>
                  <ButtonTextLnkd>LinkedIn</ButtonTextLnkd>
              </ButtonLnkd>
              <ButtonCv onClick={(openCv)}>
                  <ButtonTextCv>Currículo</ButtonTextCv>
              </ButtonCv>
        </Main>
    </Container>
  )
}
export default HomePage;
