/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { 
    Container,
    Main,
    Name,
    Gretting,
    ButtonPrj,
    ButtonCv,
    ButtonTextPrj,
    ButtonTextCv,
     } from './styles'

const HomePage: React.FC  = () => {
  const OpenCv = () => {
    window.open('https://www.google.com/')
  }
  const OpenPrj = () => {
    window.open('https://www.github.com/rhaneyko')
  }

  return (

    <Container className='Home' id='home'>
        <Main>
            <Gretting>Olá, meu nome é</Gretting>
                <Name>Rhaneyko </Name> 
            <Gretting>Desenvolvedor.</Gretting>
            <Gretting>Estudante de Análise e Desenvolvimento de Sistemas. |</Gretting>
              <ButtonPrj onClick={(OpenPrj)}>
                  <ButtonTextPrj>PROJETOS</ButtonTextPrj>
                  <AiFillGithub size={20} color='#000000'/>
              </ButtonPrj>

              <ButtonCv onClick={(OpenCv)}>
                  <ButtonTextCv>CV</ButtonTextCv>
              </ButtonCv>
        </Main>
    </Container> 
  )
}

export default HomePage;
