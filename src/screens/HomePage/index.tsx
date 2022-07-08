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
    window.open('https://firebasestorage.googleapis.com/v0/b/rhaneyko-portifolio.appspot.com/o/Rhaneyko%20Cv%20PT.pdf?alt=media&token=c8cbb576-4ba3-436e-8b67-2b610f90173c')
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
